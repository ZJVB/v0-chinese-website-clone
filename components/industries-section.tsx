import Link from "next/link";
import { ArrowRight, Shirt, Zap, Smartphone, Sofa, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const industries = [
  {
    icon: Shirt,
    title: "时尚服饰与快消品",
    description: "适合高频出货、多 SKU 管理与快速周转场景。",
    href: "/industries/fashion",
  },
  {
    icon: Zap,
    title: "新能源与电池",
    description: "更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。",
    href: "/industries/energy",
  },
  {
    icon: Smartphone,
    title: "消费电子与高价值商品",
    description: "更关注库存准确、包装保护、追踪可视化与签收体验。",
    href: "/industries/electronics",
  },
  {
    icon: Sofa,
    title: "大件家居与器材",
    description: "适合需要大件仓储、分拨及复杂交付支持的业务。",
    href: "/industries/furniture",
  },
  {
    icon: Sparkles,
    title: "美妆与保健品",
    description: "适合高频小件订单、批次管理和消费者体验要求较高的场景。",
    href: "/industries/beauty",
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-lg bg-background p-7 shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5">
                了解详情
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
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
