"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "电话", content: "+44 161 XXX XXXX", href: "tel:+44161XXXXXXX" },
  { icon: Mail, title: "邮箱", content: "info@cubecang.com", href: "mailto:info@cubecang.com" },
  { icon: MapPin, title: "地址", content: "Manchester, United Kingdom", href: null },
  { icon: Clock, title: "工作时间", content: "周一至周六 9:00-18:00（英国时间）", href: null },
];

const quickLinks = [
  { icon: MessageSquare, title: "在线咨询", desc: "即时沟通，快速响应", action: "开始对话" },
  { icon: Globe, title: "微信咨询", desc: "添加客服微信：CubeCang", action: "添加微信" },
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
        {/* Page header */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground lg:text-[40px]">联系</h1>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">我们</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 mx-auto max-w-xl text-muted-foreground leading-relaxed">
                无论您有任何关于英国海外仓、跨境物流的需求或疑问，我们的团队随时为您服务
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="border-b border-border py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-8">
              {quickLinks.map((link) => (
                <div key={link.title} className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm sm:px-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{link.title}</p>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* FAQ Preview */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">常见</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">问题</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {[
                { q: "入仓需要多长时间？", a: "标准货物入仓后24小时内完成上架，紧急货物可申请加急处理。" },
                { q: "支持哪些电商平台对接？", a: "支持Amazon、eBay、TEMU、SHEIN、Shopify、WooCommerce等主流平台API直连。" },
                { q: "如何计算仓储费用？", a: "按实际占用库位计费，提供透明的在线账单系统，随时查看费用明细。" },
                { q: "退货如何处理？", a: "提供退货接收、质检分级、重新包装、二次上架等全流程服务。" },
              ].map((item) => (
                <div key={item.q} className="rounded-lg bg-background p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
