import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import { Warehouse, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "仓储网络 - Cube Cang",
  description: "英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。",
};

const services = [
  "英国本地仓储与库存管理",
  "入仓、存储、出库及中转支持",
  "分仓、调拨与多仓协同安排",
  "电商、零售、FBA 与项目型业务支持",
  "旺季库存缓冲与弹性仓储服务",
];

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Warehouse className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  仓储网络
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。提供入仓、存储、出库及中转支持，满足不同业务场景的仓储需求。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      咨询仓储方案
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
                    <Warehouse className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">仓储网络</p>
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
