import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { RotateCcw, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "售后退货与履约保障 - Cube Cang",
  description:
    "提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。",
};

const services = [
  "英国本地退件接收与登记",
  "开箱检查、分类处理与状态判断",
  "重新上架、退回、报废等后续安排",
  "逆向履约与库存恢复支持",
  "售后流程协同与异常处理",
];

export default function ReturnsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <RotateCcw className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  售后退货与履约保障
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  提供退件接收、检查、分类处理与后续履约支持。帮助客户优化退货流程，降低退货处理成本，提升库存周转效率。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      获取方案
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/solutions">查看全部方案</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-[400px]">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <RotateCcw className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">退货与售后</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-2xl font-bold text-foreground lg:text-3xl text-center">
              服务内容
            </h2>
            <div className="mx-auto max-w-2xl">
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-lg bg-card p-5 shadow-sm"
                  >
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
