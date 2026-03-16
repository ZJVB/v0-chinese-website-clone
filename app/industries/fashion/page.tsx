import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import { Shirt, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "时尚服饰与快消品 - Cube Cang",
  description: "适合高频出货、多 SKU 管理与快速周转场景的英国本地履约支持。",
};

const services = [
  "多 SKU 产品仓储与库存管理",
  "高频订单处理与本地发货支持",
  "促销活动与旺季期间的履约安排",
  "退货接收、检查与后续处理",
  "配合平台与品牌需求的包装及增值操作",
];

export default function FashionPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Shirt className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  时尚服饰与快消品
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  适合高频出货、多 SKU 管理与快速周转场景。提供专业的仓储管理、订单履约和退货处理服务，支持品牌和平台的运营需求。
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
                    <Shirt className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">时尚服饰</p>
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


      </main>
      <Footer />
    </>
  );
}
