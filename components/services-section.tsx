import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const services = [
  {
    title: "FBA 备货与转运",
    description: "英国本地前置仓备货、中转分拨、分批补货",
    image: "/images/service-fba.jpg",
    href: "/solutions/fba",
  },
  {
    title: "D2C 一件代发",
    description: "独立站及多平台订单履约，本地快速发货",
    image: "/images/service-d2c.jpg",
    href: "/solutions/d2c",
  },
  {
    title: "B2B 零售分销",
    description: "整箱整托、门店补货、批量订单配送",
    image: "/images/service-b2b.jpg",
    href: "/solutions/b2b",
  },
  {
    title: "退货与售后",
    description: "退件接收、检查分类、后续履约处理",
    image: "/images/service-returns.jpg",
    href: "/solutions/returns",
  },
  {
    title: "WMS 与系统对接",
    description: "库存、订单与物流可视化管理",
    image: "/images/service-wms.jpg",
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

        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex-shrink-0 w-[200px] lg:flex-1 h-[320px] overflow-hidden rounded-xl shadow-[0_1px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-2 text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {service.description}
                </p>
              </div>
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
