"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "电话", content: "+44 161 XXX XXXX", href: "tel:+44161XXXXXXX" },
  { icon: Mail, title: "邮箱", content: "info@cubecang.com", href: "mailto:info@cubecang.com" },
  { icon: MapPin, title: "地址", content: "Manchester, United Kingdom", href: null },
  { icon: Clock, title: "工作时间", content: "周一至周六 9:00-18:00（英国时间）", href: null },
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validateForm(): boolean {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "请输入姓名";
    } else if (formData.name.length > 100) {
      newErrors.name = "姓名过长";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "请输入邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "请输入留言内容";
    } else if (formData.message.length > 5000) {
      newErrors.message = "留言内容过长";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitError(data.message || "提交失败，请稍后重试");
      }
    } catch {
      setSubmitError("网络错误，请检查网络连接后重试");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="CONTACT US"
          title="联系我们"
          description="无论您有任何关于英国海外仓、跨境物流的需求或疑问，我们的团队随时为您服务"
          image="/images/banner-contact.jpg"
        />

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Left - Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  联系方式
                </h2>
                <p className="mb-8 text-muted-foreground">
                  欢迎通过以下方式联系我们，或填写右侧表单，我们将在24小时内回复。
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-xl bg-white p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                        <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-white p-6 border border-gray-100">
                  <h3 className="mb-4 font-bold text-foreground">微信联系</h3>
                  <p className="text-sm text-muted-foreground mb-4">扫码添加客服微信，获取即时咨询服务</p>
                  <div className="flex gap-6">
                    <div className="group text-center">
                      <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[1.8] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                        <img src="/images/qr-1.png" alt="微信客服1" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs text-muted-foreground">客服微信 1</span>
                    </div>
                    <div className="group text-center">
                      <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[1.8] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                        <img src="/images/qr-2.png" alt="微信客服2" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs text-muted-foreground">客服微信 2</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">鼠标悬停放大二维码</p>
                </div>
              </div>
              
              {/* Right - Contact Form */}
              <div className="lg:col-span-3 rounded-2xl bg-white p-8 border border-gray-100 shadow-lg">
                <h3 className="mb-1 text-xl font-bold text-foreground">发送消息</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  填写以下表单，我们的团队将尽快与您联系
                </p>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-lg font-bold text-foreground">提交成功！</p>
                    <p className="mt-2 text-sm text-muted-foreground text-center">感谢您的咨询，我们的团队将在24小时内与您联系。</p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      发送新消息
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      id="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    {submitError && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-600">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p className="text-sm">{submitError}</p>
                      </div>
                    )}
                    
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">姓名 *</Label>
                        <Input 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="请输入您的姓名" 
                          className={`h-11 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="company">公司/店铺名称</Label>
                        <Input 
                          id="company" 
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="请输入公司或店铺名称" 
                          className="h-11" 
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">邮箱地址 *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com" 
                          className={`h-11 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">联系电话/微信</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="手机号或微信号" 
                          className="h-11" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">感兴趣的服务</Label>
                      <select 
                        id="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="h-11 rounded-md border border-input bg-background px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">请选择服务类型</option>
                        <option value="海外仓一件代发">海外仓一件代发</option>
                        <option value="FBA头程/中转">FBA头程/中转</option>
                        <option value="TEMU官方仓服务">TEMU官方仓服务</option>
                        <option value="退货处理">退货处理</option>
                        <option value="B2B批发配送">B2B批发配送</option>
                        <option value="其他服务">其他服务</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">留言信息 *</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="请描述您的业务需求，如日均单量、主营品类、目标市场等..." 
                        rows={5} 
                        className={errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2 h-12 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          提交咨询
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      7x24小时客服支持 | 您的信息将被严格保密
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
