import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { Ship, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "货运与特种物流 - Cube Cang",
  description: "整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。",
};

const services = [
  "整柜、拼箱及多种国际运输方式支持",
  "空运、海运、陆运及铁路运输协调",
  "大件、设备、电池类及特殊货物处理",
  "项目物流与分阶段交付安排",
  "仓储、中转与末端配送一体衔接",
];

export default function FreightPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Ship className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  货运与特种物流
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  提供整柜、拼箱及多种国际运输方式支持，处理大件、设备、电池类及特殊货物，实现仓储、中转与末端配送一体化衔接。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      咨询货运方案
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
                    <Ship className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">货运物流</p>
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
