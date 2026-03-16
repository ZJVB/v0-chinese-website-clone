"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, ArrowRight, Heart, Pill, Dumbbell, Apple, ShieldCheck, Thermometer } from "lucide-react";

const features = [
  { icon: Heart, title: "健康产品", desc: "保健品、营养补充剂存储" },
  { icon: Pill, title: "医疗器械", desc: "小型医疗设备专业处理" },
  { icon: Dumbbell, title: "健身器材", desc: "运动器材仓储与配送" },
  { icon: Apple, title: "健康食品", desc: "有机食品、代餐产品" },
  { icon: Thermometer, title: "温控存储", desc: "特殊温度要求产品存储" },
  { icon: ShieldCheck, title: "合规管理", desc: "符合健康产品法规要求" },
];

const capabilities = [
  "健康产品专业仓储环境",
  "批次管理与效期追踪",
  "温湿度监控存储",
  "产品合规性文档管理",
  "健身器材大件配送",
  "无尘包装环境",
];

export default function HealthIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <section className="bg-gradient-to-br from-primary/5 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">行业方案</p>
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">健康与保健</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">专业健康产品物流服务，覆盖保健品、健身器材、医疗设备等品类，确保产品安全与合规。</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="服务能力" highlight="能力" subtitle="健康产品专业物流" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="核心优势" highlight="优势" />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">咨询健康产品方案 <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
