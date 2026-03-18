import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, timestamp: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count++;
  return false;
}

// Basic validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsSuspiciousContent(text: string): boolean {
  // Check for common spam patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onclick/i,
    /onerror/i,
    /<iframe/i,
    /<object/i,
    /data:text\/html/i,
    /\[url=/i,
    /\[link=/i,
  ];
  return suspiciousPatterns.some((pattern) => pattern.test(text));
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { success: false, message: "请求过于频繁，请稍后再试" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, phone, service, message, honeypot } = body;

    // Honeypot check (hidden field that bots might fill)
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: "验证失败" },
        { status: 400 }
      );
    }

    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "请输入有效的邮箱地址" },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100 || message.length > 5000 || (company && company.length > 200)) {
      return NextResponse.json(
        { success: false, message: "输入内容过长" },
        { status: 400 }
      );
    }

    // Check for suspicious content
    const allText = `${name} ${company || ""} ${message}`;
    if (containsSuspiciousContent(allText)) {
      return NextResponse.json(
        { success: false, message: "检测到无效内容" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      company: company ? sanitizeInput(company) : "",
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : "",
      service: service ? sanitizeInput(service) : "",
      message: sanitizeInput(message),
    };

    // Send email using Resend
    // Replace 're_xxxxxxxxx' with your real Resend API key or set RESEND_API_KEY env variable
    const resendApiKey = process.env.RESEND_API_KEY || "re_xxxxxxxxx";
    const resend = new Resend(resendApiKey);
    
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "contact@thecubedistribution.com",
        subject: `海外仓业务咨询 - ${sanitizedData.name}`,
        html: `
          <h2>新客户咨询</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">姓名</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">公司/店铺</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.company || "未填写"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">邮箱</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">电话/微信</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.phone || "未填写"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">感兴趣的服务</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.service || "未选择"}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px;">留言内容</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="margin: 0; white-space: pre-wrap;">${sanitizedData.message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">此邮件由 Cube 海外仓网站自动发送</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email via Resend:", emailError);
      return NextResponse.json(
        { success: false, message: "发送失败，请稍后重试" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "提交成功！我们将尽快与您联系。",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}
