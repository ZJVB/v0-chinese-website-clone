import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { Smartphone, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "消费电子与高价值商品 - Cube Cang",
  description: "更关注库存准确、包装保护、追踪可视化与签收体验的英国本地履约支持。",
};

const services = [
  "高价值商品仓储与库存管理",
  "订单处理、包装保护与出货支持",
  "更清晰的物流追踪与签收反馈",
  "退货检测、翻新及后续处理支持",
  "适合品牌和平台业务的本地履约安排",
];

export default function ElectronicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Smartphone className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  消费电子与高价值商品
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  更关注库存准确、包装保护、追踪可视化与签收体验。提供专业的高价值商品仓储、包装与配送服务。
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
                    <Smartphone className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">消费电子</p>
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
