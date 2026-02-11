"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

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
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              联系我们
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
              已有报价？让我们为您提供更优价格
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              如果您已收到其他报价，MSL UK Ltd
              保证为您提供更低的价格。不妨试试我们？
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">电话</p>
                  <a
                    href="tel:01616223633"
                    className="text-muted-foreground hover:text-primary"
                  >
                    0161 622 3633
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">邮箱</p>
                  <a
                    href="mailto:info@mslukltd.co.uk"
                    className="text-muted-foreground hover:text-primary"
                  >
                    info@mslukltd.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">地址</p>
                  <p className="text-muted-foreground">
                    Manchester, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              紧急报价？我们快速响应
            </h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <p className="text-lg font-semibold text-foreground">
                  提交成功！
                </p>
                <p className="text-muted-foreground">
                  我们的团队将尽快与您联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input
                      id="name"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">公司名称</Label>
                    <Input id="company" placeholder="请输入公司名称" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">邮箱地址</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 xxx xxxx xxxx"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">留言信息</Label>
                  <Textarea
                    id="message"
                    placeholder="请描述您的需求，例如月订单量、产品类型、存储需求等..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  提交表单
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  我们全天候24/7提供专业帮助
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
