import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";

import { Warehouse, Clock, Truck, Ship, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "仓储与派送 - Cube Cang",
  description:
    "Cube Cang 提供英国本地仓储网络、全英配送时效、多物流渠道对接及货运特种物流服务。",
};

const services = [
  {
    icon: Warehouse,
    title: "仓储网络",
    description: "英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。",
    href: "/warehousing/network",
  },
  {
    icon: Clock,
    title: "全英配送时效",
    description: "英国主要区域本地配送支持，标准配送、次日达及不同服务等级安排。",
    href: "/warehousing/delivery",
  },
  {
    icon: Truck,
    title: "物流渠道",
    description: "多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。",
    href: "/warehousing/logistics",
  },
  {
    icon: Ship,
    title: "货运与特种物流",
    description: "整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。",
    href: "/warehousing/freight",
  },
];

export default function WarehousingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="WAREHOUSING & DELIVERY"
          title="仓储与派送"
          description="以英国本地仓储与配送资源，支撑更高效的订单履约。从入仓到出货、从库存管理到末端派送的一体化支持。"
          image="/images/banner-warehousing.jpg"
        />

        {/* Services grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-5 rounded-lg bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      了解详情
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
