import Link from "next/link";
import {
  BadgeCheck,
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
    icon: BadgeCheck,
    title: "TEMU 官方认证仓",
    href: "/solutions/temu",
  },
  {
    icon: Package,
    title: "FBA 备货与转运",
    href: "/solutions/fba",
  },
  {
    icon: ShoppingBag,
    title: "D2C 一件代发",
    href: "/solutions/d2c",
  },
  {
    icon: Building2,
    title: "B2B 零售分销",
    href: "/solutions/b2b",
  },
  {
    icon: RotateCcw,
    title: "退货与售后支持",
    href: "/solutions/returns",
  },
  {
    icon: Settings,
    title: "WMS 与 API 支持",
    href: "/technology/wms",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8fafc] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="我们的"
          highlight="服务"
          subtitle="Cube海外仓专注于英国本地仓储、履约、配送及售后支持，为不同平台、渠道及业务模式的客户提供更高效、更稳定的本地物流解决方案。"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-[0_1px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-md">
            <Link href="/solutions">
              查看全部解决方案
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
