import Link from "next/link";
import {
  Warehouse,
  Package,
  Truck,
  Ship,
  Camera,
  Box,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "托盘仓储",
    description: "安全、可扩展的散货存储与高效托盘管理方案。",
    slug: "pallet-storage",
  },
  {
    icon: Package,
    title: "电商履约",
    description: "端到端订单履约，涵盖存储、拣货、包装和配送。",
    slug: "ecommerce-fulfilment",
  },
  {
    icon: Truck,
    title: "运输配送",
    description: "国内及国际配送，高效陆运与货运服务。",
    slug: "transport-delivery",
  },
  {
    icon: Ship,
    title: "国际货运代理",
    description: "全球运输与清关的端到端物流解决方案。",
    slug: "freight-forwarding",
  },
  {
    icon: Camera,
    title: "产品摄影",
    description: "专业产品拍摄，提升在线商品展示效果。",
    slug: "product-photography",
  },
  {
    icon: Box,
    title: "智能包装",
    description: "环保、高效的定制包装解决方案。",
    slug: "smart-packaging",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            核心服务
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            全方位电商物流解决方案
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            从仓储管理到最终配送，Cube Fulfilment 为您提供一站式物流服务。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            查看全部服务
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
