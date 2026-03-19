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
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">微信联系</h3>
                <p className="text-sm text-muted-foreground">扫码添加客服微信，获取即时咨询服务（鼠标悬停放大二维码）</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="group text-center">
                  <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                    <img src="/images/qr-1.png" alt="销售咨询" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-muted-foreground">销售咨询</span>
                </div>
                <div className="group text-center">
                  <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                    <img src="/images/qr-2.png" alt="技术支持" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-muted-foreground">技术支持</span>
                </div>
                <div className="group text-center">
                  <div className="relative mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:z-50 group-hover:shadow-xl group-hover:border-primary">
                    <img src="/images/qr-china.png" alt="销售专员（中国办）" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-muted-foreground">销售专员（中国办）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">发送咨询</h2>
              <p className="text-muted-foreground">填写以下表单，我们的团队将在24小时内与您联系</p>
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
        </section>


      </main>
      <Footer />
    </>
  );
}
