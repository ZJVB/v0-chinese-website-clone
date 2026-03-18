import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="bg-[#f5f7fa] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            核心服务
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            我们的<span className="text-primary">服务</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            专注于英国本地仓储与履约，为不同平台和业务模式提供稳定高效的物流解决方案
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Index number */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 line-clamp-2 mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  了解详情 <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-8 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
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
