"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "电话",
    content: "0161 622 3633",
    href: "tel:01616223633",
  },
  {
    icon: Mail,
    title: "邮箱",
    content: "info@mslukltd.co.uk",
    href: "mailto:info@mslukltd.co.uk",
  },
  {
    icon: MapPin,
    title: "地址",
    content: "Manchester, United Kingdom",
    href: null,
  },
  {
    icon: Clock,
    title: "工作时间",
    content: "周一至周日 全天候服务",
    href: null,
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              联系我们
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
              已有报价？让我们为您提供更优价格
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground text-pretty">
              如果您已收到其他报价，MSL UK Ltd
              保证为您提供更低的价格。不妨试试我们？
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-foreground">
              紧急报价？我们快速响应
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              填写以下表单，我们的团队将在24小时内与您联系
            </p>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <p className="text-xl font-bold text-foreground">提交成功！</p>
                <p className="mt-2 text-muted-foreground">
                  我们的团队将尽快与您联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">姓名 *</Label>
                    <Input
                      id="name"
                      placeholder="请输入您的姓名"
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">公司名称</Label>
                    <Input
                      id="company"
                      placeholder="请输入公司名称"
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
                      placeholder="your@email.com"
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 xxx xxxx xxxx"
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">留言信息 *</Label>
                  <Textarea
                    id="message"
                    placeholder="请描述您的需求，例如月订单量、产品类型、存储需求等..."
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 h-12 text-base font-semibold"
                >
                  <Send className="h-4 w-4" />
                  提交表单
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  我们全天候24/7提供专业帮助 | 您的信息将被严格保密
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
