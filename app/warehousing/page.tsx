import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

import { Warehouse, Clock, Truck, Ship, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "仓储与派送 - Cube海外仓",
  description:
    "Cube海外仓提供英国本地仓储网络、全英配送时效、多物流渠道对接及货运特种物流服务。",
};

const services = [
  {
    icon: Warehouse,
    title: "仓储网络",
    description: "英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。",
    href: "/warehousing/network",
    image: "/images/warehousing-network.jpg",
  },
  {
    icon: Clock,
    title: "全英配送时效",
    description: "英国主要区域本地配送支持，标准配送、次日达及不同服务等级安排。",
    href: "/warehousing/delivery",
    image: "/images/warehousing-delivery.jpg",
  },
  {
    icon: Truck,
    title: "物流渠道",
    description: "多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。",
    href: "/warehousing/logistics",
    image: "/images/warehousing-logistics.jpg",
  },
  {
    icon: Ship,
    title: "货运与特种物流",
    description: "整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。",
    href: "/warehousing/freight",
    image: "/images/warehousing-freight.jpg",
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

        {/* Services grid - Image cards with hover effects */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                全方位仓储物流服务
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                从仓储管理到末端配送，为您提供完整的英国本地物流解决方案
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.15)] hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      了解详情
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f8fafc] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              寻找适合您的仓储物流方案？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论您是跨境电商卖家、品牌商还是需要特殊物流服务，我们都能为您提供定制化的解决方案
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/solutions">查看解决方案</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
