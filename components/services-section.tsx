import Link from "next/link";
import {
  Package,
  ShoppingBag,
  Building2,
  RotateCcw,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const services = [
  {
    icon: Package,
    title: "FBA 备货与转运",
    description: "英国本地前置仓备货、中转分拨、分批补货",
    href: "/solutions/fba",
  },
  {
    icon: ShoppingBag,
    title: "D2C 一件代发",
    description: "独立站及多平台订单履约，本地快速发货",
    href: "/solutions/d2c",
  },
  {
    icon: Building2,
    title: "B2B 零售分销",
    description: "整箱整托、门店补货、批量订单配送",
    href: "/solutions/b2b",
  },
  {
    icon: RotateCcw,
    title: "退货与售后",
    description: "退件接收、检查分类、后续履约处理",
    href: "/solutions/returns",
  },
  {
    icon: Settings,
    title: "WMS 与系统对接",
    description: "库存、订单与物流可视化管理",
    href: "/technology/wms",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="我们的"
          highlight="服务"
          subtitle="专注于英国本地仓储与履约，为不同平台和业务模式提供稳定高效的物流解决方案。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-[0_1px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5 mt-1" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2 rounded-md">
            <Link href="/solutions">
              查看全部方案
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
