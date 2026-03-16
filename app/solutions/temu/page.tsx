import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  CheckCircle,
  ArrowRight,
  ImageIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TEMU 官方认证仓 - Cube Cang",
  description:
    "Cube Cang 作为 TEMU 官方认证仓，为平台卖家提供标准化仓储、订单履约与本地发货支持，履约表现长期位居前列。",
};

const services = [
  "TEMU 平台相关仓储与履约支持",
  "标准化入仓、库存管理与订单处理",
  "分拣、打包、标签操作与本地发货",
  "旺季与活动期间的订单履约支持",
  "退货、售后及增值服务延伸",
];

export default function TemuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">官方认证仓</span>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-[40px] leading-tight">
                  TEMU 官方认证仓履约服务
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  为 TEMU 平台卖家提供更标准化、更稳定的英国本地仓储与履约支持，帮助您提升订单处理效率、优化派送体验，并更好地配合平台要求开展运营。
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
                    <BadgeCheck className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">TEMU 官方认证</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business intro */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl text-center">
                业务介绍
              </h2>
              <p className="text-muted-foreground leading-relaxed text-center">
                Cube Cang 为 TEMU 平台卖家提供英国本地仓储与履约服务，覆盖入仓、库存管理、订单处理、分拣打包、标签操作、发货及售后支持等环节。我们理解平台业务对时效、流程规范和履约稳定性的要求，因此在日常操作中更加注重标准化、准确性与响应效率，帮助客户更顺畅地开展英国本地业务。
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-2xl font-bold text-foreground lg:text-3xl text-center">
              服务内容
            </h2>
            <div className="mx-auto max-w-2xl">
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-lg bg-background p-5 shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform data section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl text-center">
              平台数据背书
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Cube Cang 在 TEMU 官方认证仓履约数据评估中持续保持前列表现。
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center mb-4">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/30" />
                    <p className="mt-2 text-sm text-muted-foreground">2025-10 履约数据</p>
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-foreground">
                  2025-10 TEMU 官方认证仓履约数据
                </p>
              </div>
              <div className="rounded-xl bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center mb-4">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/30" />
                    <p className="mt-2 text-sm text-muted-foreground">2025-12 履约数据</p>
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-foreground">
                  2025-12 TEMU 官方认证仓履约数据
                </p>
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
