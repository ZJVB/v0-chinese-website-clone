"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, ArrowRight, Home, Sofa, Lamp, TreeDeciduous, Package, ShieldCheck } from "lucide-react";

const features = [
  { icon: Package, title: "大件处理", desc: "专业大件家具仓储与配送" },
  { icon: Home, title: "家居品类", desc: "床品、厨具、装饰品全覆盖" },
  { icon: Sofa, title: "家具物流", desc: "沙发、桌椅等大型家具处理" },
  { icon: TreeDeciduous, title: "园艺产品", desc: "花盆、工具、户外家具" },
  { icon: Lamp, title: "灯具处理", desc: "易碎灯具专业包装保护" },
  { icon: ShieldCheck, title: "安全存储", desc: "防潮防尘专业仓储环境" },
];

const capabilities = [
  "大件家具专业搬运与配送",
  "易碎品多层包装保护",
  "组装配件分拣打包",
  "季节性库存管理",
  "园艺产品存储方案",
  "白手套送货服务",
];

export default function HomeGardenIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <section className="bg-gradient-to-br from-primary/5 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">行业方案</p>
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">家居与园艺</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">专业大件家居物流，覆盖家具、家纺、厨具、园艺等品类，提供安全存储与配送服务。</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="服务能力" highlight="能力" subtitle="专业家居物流解决方案" />
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
                <Link href="/contact">咨询家居物流方案 <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
