"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, User } from "lucide-react";

interface FormData {
  email: string;
  honeypot: string;
}

interface FormErrors {
  email?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validateForm(): boolean {
    const newErrors: FormErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "请输入邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
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
          email: "",
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

        {/* Contact Info Cards */}
        <section className="py-12 lg:py-16 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* UK Office Card */}
              <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">英国总部</h3>
                  <p className="text-sm text-muted-foreground">UK Headquarters</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:+441615662392" className="text-muted-foreground text-sm hover:text-primary transition-colors">+44 161 566 2392 / 7599588577</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a href="mailto:contact@thecubedistribution.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">contact@thecubedistribution.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">周一至周六 9:00-18:00（英国时间）</p>
                  </div>
                </div>
              </div>

              {/* China Office Card */}
              <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">中国办事处</h3>
                  <p className="text-sm text-muted-foreground">China Office</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">联系人：张小姐</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:18033414492" className="text-muted-foreground text-sm hover:text-primary transition-colors">18033414492（微信同号）</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">周一至周日 8:00-20:00（北京时间）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WeChat QR Codes - Independent Section */}
            <div className="mt-6 rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
                    <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
                    <circle cx="14.392" cy="14.551" r="1" fill="white"/>
                    <circle cx="19.608" cy="14.551" r="1" fill="white"/>
                    <circle cx="5.565" cy="8.5" r="1" fill="white"/>
                    <circle cx="10.782" cy="8.5" r="1" fill="white"/>
                  </svg>
                  微信联系
                </h3>
                <p className="text-sm text-muted-foreground">扫码添加客服微信，获取实时咨询服务（鼠标悬停放大二维码）</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sales Department */}
                <div className="text-center">
                  <h4 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-gray-100">销售部</h4>
                  <div className="flex justify-center gap-6">
                    <div className="group text-center">
                      <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                        <img src="/images/qr-2.png" alt="销售咨询" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-muted-foreground">销售咨询</span>
                    </div>
                    <div className="group text-center">
                      <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                        <img src="/images/qr-china.png" alt="销售专员（中国办）" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-muted-foreground">销售专员（中国办）</span>
                    </div>
                  </div>
                </div>
                {/* Technical Support Department */}
                <div className="text-center">
                  <h4 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-gray-100">技术支持部</h4>
                  <div className="flex justify-center gap-6">
                    <div className="group text-center">
                      <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                        <img src="/images/qr-1.png" alt="技术支持" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-muted-foreground">技术支持</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">邮件联系</h2>
              <p className="text-muted-foreground">输入您的邮箱地址，我们将及时与您联系</p>
            </div>
              
            <div className="rounded-2xl bg-[#f8fafc] p-6 lg:p-10 border border-gray-100">
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
                          订阅
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      7x24小时客服支持
                    </p>
                  </form>
                )}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
