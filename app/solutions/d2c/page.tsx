import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "D2C 一件代发 - Cube Cang",
  description:
    "支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。",
};

const services = [
  "多平台订单接入与同步处理",
  "SKU 与库存管理",
  "拣货、打包、贴单与发运",
  "多渠道本地配送支持",
  "物流追踪、退货与异常处理",
];

export default function D2cPage() {
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
                  <ShoppingBag className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  D2C 一件代发
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  支持独立站和多平台订单履约，实现英国本地快速发货。无论是 Shopify、WooCommerce 还是其他电商平台，我们都能提供稳定的订单处理与配送支持，提升消费者购物体验。
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
                    <ShoppingBag className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">D2C 一件代发</p>
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
