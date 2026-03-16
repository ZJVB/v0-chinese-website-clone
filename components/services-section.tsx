import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  Package,
  ShoppingBag,
  Building2,
  RotateCcw,
  Settings,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const services = [
  {
    icon: BadgeCheck,
    title: "TEMU 官方认证仓",
    description: "为 TEMU 平台卖家提供标准化仓储、订单履约与本地发货支持。",
    highlight: "作为 TEMU 官方认证仓，Cube Cang 在多个周期的履约数据评估中持续保持优异表现，履约表现长期位居前列。",
    href: "/solutions/temu",
    image: "/images/service-temu.jpg",
  },
  {
    icon: Package,
    title: "FBA 备货与转运",
    description: "支持英国本地前置仓备货、中转、分批补货与退件处理。",
    href: "/solutions/fba",
    image: "/images/service-fba.jpg",
  },
  {
    icon: ShoppingBag,
    title: "D2C 一件代发",
    description: "支持独立站和多平台订单履约，实现英国本地快速发货。",
    href: "/solutions/d2c",
    image: "/images/service-d2c.jpg",
  },
  {
    icon: Building2,
    title: "B2B 零售分销",
    description: "适用于整箱、整托、门店补货及批量订单配送场景。",
    href: "/solutions/b2b",
    image: "/images/service-b2b.jpg",
  },
  {
    icon: RotateCcw,
    title: "退货与售后支持",
    description: "提供退件接收、检查、分类处理与后续履约支持。",
    href: "/solutions/returns",
    image: "/images/service-returns.jpg",
  },
  {
    icon: Settings,
    title: "系统与 API 支持",
    description: "通过 WMS 与系统对接提升库存、订单与物流可视化能力。",
    href: "/technology/wms",
    image: "/images/service-api.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="覆盖仓储、履约、派送与售后的"
          highlight="英国本地物流能力"
          subtitle="无论您是平台卖家、独立站品牌，还是零售分销客户，Cube Cang 都可根据您的订单模式、产品类型和业务阶段，提供更适合的英国本地物流解决方案。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.highlight && (
                  <p className="mb-3 text-xs leading-relaxed text-primary/80 bg-primary/5 rounded p-2">
                    {service.highlight}
                  </p>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5">
                  了解详情
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            查看全部解决方案
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
