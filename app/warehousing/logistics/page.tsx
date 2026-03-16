import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import { Truck, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "物流渠道 - Cube Cang",
  description: "多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。",
};

const services = [
  "多家主流英国物流渠道对接",
  "轻小件、标准件、大件及特殊订单渠道匹配",
  "按时效、签收方式和成本结构配置物流方案",
  "多渠道组合发货与资源切换支持",
  "提升履约灵活性与配送稳定性",
];

export default function LogisticsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Truck className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  物流渠道
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  对接多家主流英国物流渠道，根据产品属性、时效要求和成本结构灵活配置物流方案，提升履约灵活性与配送稳定性。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      咨询物流方案
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/warehousing">返回仓储与派送</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-[400px]">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">物流渠道</p>
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
