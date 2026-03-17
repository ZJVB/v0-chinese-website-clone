import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shirt, Zap, Smartphone, Sofa, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const industries = [
  {
    icon: Shirt,
    title: "时尚服饰与快消品",
    description: "适合高频出货、多 SKU 管理与快速周转场景。",
    href: "/industries/fashion",
    image: "/images/industry-fashion.jpg",
  },
  {
    icon: Zap,
    title: "新能源与电池",
    description: "更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。",
    href: "/industries/energy",
    image: "/images/industry-energy.jpg",
  },
  {
    icon: Smartphone,
    title: "消费电子与高价值商品",
    description: "更关注库存准确、包装保护、追踪可视化与签收体验。",
    href: "/industries/electronics",
    image: "/images/industry-electronics.jpg",
  },
  {
    icon: Sofa,
    title: "大件家居与器材",
    description: "适合需要大件仓储、分拨及复杂交付支持的业务。",
    href: "/industries/home-garden",
    image: "/images/industry-furniture.jpg",
  },
  {
    icon: Sparkles,
    title: "美妆与保健品",
    description: "适合高频小件订单、批次管理和消费者体验要求较高的场景。",
    href: "/industries/health",
    image: "/images/industry-beauty.jpg",
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="针对不同行业特点，提供"
          highlight="更匹配的本地履约支持"
          subtitle="不同产品在仓储、履约、配送和售后上的要求并不相同。Cube Cang 结合不同行业的业务特点，为客户提供更符合实际运营需求的英国本地物流支持。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                  了解详情
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-md">
            <Link href="/industries">
              查看行业解决方案
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
