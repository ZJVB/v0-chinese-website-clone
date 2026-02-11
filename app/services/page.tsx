import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Warehouse,
  Package,
  Truck,
  Ship,
  Camera,
  Box,
  Globe,
  Headphones,
  BarChart3,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "服务项目 - Cube Fulfilment",
  description:
    "Cube Fulfilment 提供全方位电商物流服务：仓储、履约、运输、货运代理、产品摄影、智能包装等。",
};

const services = [
  { icon: Warehouse, title: "托盘仓储", description: "安全、可扩展的散货存储解决方案，包括高效的托盘存储选项。", slug: "pallet-storage" },
  { icon: Package, title: "电商履约", description: "端到端的电商履约解决方案，简化在线业务的存储、拣货、包装和配送流程。", slug: "ecommerce-fulfilment" },
  { icon: Truck, title: "运输配送", description: "可靠的国内和国际配送选项，支持高效的陆运和货运服务。", slug: "transport-delivery" },
  { icon: Ship, title: "国际货运代理", description: "全球运输和清关的端到端物流服务，可靠的货运代理解决方案。", slug: "freight-forwarding" },
  { icon: Camera, title: "产品摄影", description: "高品质产品拍摄服务，提升您的在线列表和转化率。", slug: "product-photography" },
  { icon: Box, title: "智能包装", description: "创新、环保且经济高效的智能包装解决方案。", slug: "smart-packaging" },
  { icon: BarChart3, title: "智能销售方案", description: "提升电商业绩的工具和策略，包括数据分析、定价优化。", slug: "smart-sales" },
  { icon: Globe, title: "国际客户3PL服务", description: "帮助国际客户更智能地在英国市场运营的全链条3PL服务。", slug: "international-3pl" },
  { icon: Headphones, title: "客户支持外包", description: "我们可以代您处理客户咨询和售后服务。", slug: "customer-support" },
  { icon: Rocket, title: "初创企业支持", description: "灵活的、适合增长的解决方案，帮助新企业从零起步。", slug: "startup-support" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-[72px]">
          <div className="relative h-[320px] lg:h-[380px]">
            <Image
              src="/images/warehouse-operations.jpg"
              alt="Cube 仓储服务"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    智能仓储与精准分拣系统
                  </p>
                  <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                    跨境卖家的零风险履约解决方案
                  </h1>
                  <p className="text-base leading-relaxed text-white/70 max-w-lg text-pretty">
                    AI驱动的智能分拣系统，自动化优化拣货路径，订单处理效率提升30%，精准配货率达99.8%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-lg bg-card p-6 shadow-[0_1px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5">
                    了解详情
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              需要定制化的物流方案？
            </h2>
            <p className="mb-8 text-muted-foreground">
              联系我们的专家团队，获取适合您业务的个性化物流解决方案
            </p>
            <Button asChild size="lg" className="gap-2 rounded-md">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
