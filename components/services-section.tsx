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
    title: "短期存储",
    description: "适用于快速周转商品，灵活出库，降低仓储成本",
    slug: "pallet-storage",
  },
  {
    icon: Package,
    title: "长期存储",
    description: "适合大批量进货、季节性商品存储，优化供应链成本",
    slug: "ecommerce-fulfilment",
  },
  {
    icon: Truck,
    title: "温控仓储",
    description: "适用于食品、美妆、医疗等对存储环境有特殊要求的产品",
    slug: "transport-delivery",
  },
  {
    icon: Ship,
    title: "大件 & 托盘存储",
    description: "专为家具、家电、机械设备等大件商品提供专业存储方案",
    slug: "freight-forwarding",
  },
  {
    icon: Camera,
    title: "全渠道平台存储",
    description: "深度对接亚马逊、独立站等销售渠道，实现库存数据实时同步",
    slug: "product-photography",
  },
  {
    icon: Box,
    title: "增值服务集成存储",
    description: "整合贴标换标、定制包装、退货翻新等增值服务，形成存储-处理-再销售闭环",
    slug: "smart-packaging",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header with animated underline */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-1 text-3xl font-bold text-foreground lg:text-[40px]">
            灵活存储方案
          </h2>
          <div className="relative mx-auto mt-1 mb-4 inline-block">
            <span className="text-3xl font-bold text-foreground lg:text-[40px]">
              满足不同业务需求
            </span>
            <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto">
            不同卖家的运营模式不同，Cube提供个性化仓储方案，确保您的货物能在最合适的条件下存储
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-lg bg-card p-7 shadow-[0_1px_12px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5">
                了解详情
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            查看全部服务
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
