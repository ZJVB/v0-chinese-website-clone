import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "新能源与电池 - Cube Cang",
  description: "更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。",
};

const services = [
  "英国本地仓储与库存管理支持",
  "电池类及新能源产品的操作流程配合",
  "适配产品属性的物流渠道安排",
  "售后退货、检查与后续处理支持",
  "与仓储、履约、配送相结合的一体化服务",
];

export default function EnergyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  新能源与电池
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。提供专业的电池类产品仓储与配送服务。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      获取行业方案
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/industries">查看全部行业</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-[400px]">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">新能源电池</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-2xl font-bold text-foreground lg:text-3xl text-center">
              服务内容
            </h2>
            <div className="mx-auto max-w-2xl">
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-4 rounded-lg bg-card p-5 shadow-sm">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
