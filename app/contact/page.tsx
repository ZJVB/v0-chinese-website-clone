"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "电话", content: "+44 161 XXX XXXX", href: "tel:+44161XXXXXXX" },
  { icon: Mail, title: "邮箱", content: "info@cubecang.com", href: "mailto:info@cubecang.com" },
  { icon: MapPin, title: "地址", content: "Manchester, United Kingdom", href: null },
  { icon: Clock, title: "工作时间", content: "周一至周六 9:00-18:00（英国时间）", href: null },
];



export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  联系方式
                </h2>
                <p className="mb-8 text-muted-foreground">
                  欢迎通过以下方式联系我们，或填写右侧表单，我们将在24小时内回复。
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-lg bg-card p-5 shadow-[0_1px_8px_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-card p-6 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
                  <h3 className="mb-3 font-semibold text-foreground">公司信息</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">公司名称：</span>
                      Cube Cang（酷博仓）
                    </p>
                    <p>
                      <span className="font-medium text-foreground">网站：</span>
                      www.cubecang.com
                    </p>
                    <p>
                      <span className="font-medium text-foreground">服务区域：</span>
                      英国、欧洲
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-primary/5 p-6">
                  <h3 className="mb-3 font-semibold text-foreground">我们的服务</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      英国海外仓一件代发
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      FBA头程与中转服务
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      TEMU/SHEIN官方认证仓
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      退货处理与商品翻新
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-card p-8 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
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
                    <p className="mt-2 text-sm text-muted-foreground">我们的团队将在24小时内与您联系。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">姓名 *</Label>
                        <Input id="name" placeholder="请输入您的姓名" required className="h-11" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="company">公司/店铺名称</Label>
                        <Input id="company" placeholder="请输入公司或店铺名称" className="h-11" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">邮箱地址 *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required className="h-11" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">联系电话/微信</Label>
                        <Input id="phone" type="tel" placeholder="手机号或微信号" className="h-11" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">感兴趣的服务</Label>
                      <select 
                        id="service" 
                        className="h-11 rounded-md border border-input bg-background px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">请选择服务类型</option>
                        <option value="warehouse">海外仓一件代发</option>
                        <option value="fba">FBA头程/中转</option>
                        <option value="temu">TEMU官方仓服务</option>
                        <option value="returns">退货处理</option>
                        <option value="b2b">B2B批发配送</option>
                        <option value="other">其他服务</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">留言信息 *</Label>
                      <Textarea id="message" placeholder="请描述您的业务需求，如日均单量、主营品类、目标市场等..." rows={5} required />
                    </div>
                    <Button type="submit" size="lg" className="w-full gap-2 h-12 text-base font-semibold">
                      <Send className="h-4 w-4" />
                      提交咨询
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
