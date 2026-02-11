import type { Metadata } from "next";
import Link from "next/link";
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
  {
    icon: Warehouse,
    title: "托盘仓储",
    description:
      "安全、可扩展的散货存储解决方案，包括高效的托盘存储选项。我们的仓库配备先进的安防和温控系统，确保您的货品安全无忧。",
    slug: "pallet-storage",
  },
  {
    icon: Package,
    title: "电商履约",
    description:
      "端到端的电商履约解决方案，简化在线业务的存储、拣货、包装和配送流程，提升客户满意度和复购率。",
    slug: "ecommerce-fulfilment",
  },
  {
    icon: Truck,
    title: "运输配送",
    description:
      "可靠的国内和国际配送选项，支持高效的陆运和货运服务，覆盖英国全境及欧洲主要市场。",
    slug: "transport-delivery",
  },
  {
    icon: Ship,
    title: "国际货运代理",
    description:
      "全球运输和清关的端到端物流服务，可靠的货运代理解决方案确保准时交付，简化跨境贸易。",
    slug: "freight-forwarding",
  },
  {
    icon: Camera,
    title: "产品摄影",
    description:
      "高品质产品拍摄服务，提升您的在线列表和转化率。专业摄影团队清晰展现每个产品细节。",
    slug: "product-photography",
  },
  {
    icon: Box,
    title: "智能包装",
    description:
      "创新、环保且经济高效的智能包装解决方案，提升品牌形象的同时优化运输效率。",
    slug: "smart-packaging",
  },
  {
    icon: BarChart3,
    title: "智能销售方案",
    description:
      "提升电商业绩的工具和策略，包括数据分析、定价优化和市场趋势洞察，为增长量身定制。",
    slug: "smart-sales",
  },
  {
    icon: Globe,
    title: "国际客户3PL服务",
    description:
      "帮助国际客户更智能地在英国市场运营。我们提供从入关到最终配送的全链条3PL服务。",
    slug: "international-3pl",
  },
  {
    icon: Headphones,
    title: "客户支持外包",
    description:
      "我们可以代您处理客户咨询和售后服务，让您专注于产品研发和品牌建设。",
    slug: "customer-support",
  },
  {
    icon: Rocket,
    title: "初创企业支持",
    description:
      "灵活的、适合增长的解决方案，帮助新企业从零起步，无需巨额前期投入即可拥有专业物流。",
    slug: "startup-support",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                服务项目
              </p>
              <h1 className="mb-4 text-4xl font-black text-primary-foreground lg:text-5xl text-balance">
                全方位电商物流服务
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                从仓储管理到最终配送，Cube Fulfilment 为您提供一站式电商物流解决方案，
                满足不同规模和业务类型的需求。
              </p>
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
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 transition-colors group-hover:bg-primary/15">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                    了解详情
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              需要定制化的物流方案？
            </h2>
            <p className="mb-8 text-muted-foreground">
              联系我们的专家团队，获取适合您业务的个性化物流解决方案
            </p>
            <Button asChild size="lg" className="gap-2">
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
