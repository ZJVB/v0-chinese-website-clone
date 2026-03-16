import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Shirt, Zap, Smartphone, Sofa, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "行业解决方案 - Cube Cang",
  description:
    "针对时尚服饰、新能源电池、消费电子、大件家居、美妆保健品等不同行业特点，提供更匹配的英国本地履约支持。",
};

const industries = [
  {
    icon: Shirt,
    title: "时尚服饰与快消品",
    description: "多 SKU 产品仓储与库存管理，高频订单处理与本地发货支持，促销活动与旺季期间的履约安排。",
    href: "/industries/fashion",
  },
  {
    icon: Zap,
    title: "新能源与电池",
    description: "英国本地仓储与库存管理支持，电池类及新能源产品的操作流程配合，适配产品属性的物流渠道安排。",
    href: "/industries/energy",
  },
  {
    icon: Smartphone,
    title: "消费电子与高价值商品",
    description: "高价值商品仓储与库存管理，订单处理、包装保护与出货支持，更清晰的物流追踪与签收反馈。",
    href: "/industries/electronics",
  },
  {
    icon: Sofa,
    title: "大件家居与器材",
    description: "大件商品仓储与库存支持，分拨、调度与出货安排，门店、项目点或终端客户交付支持。",
    href: "/industries/furniture",
  },
  {
    icon: Sparkles,
    title: "美妆与保健品",
    description: "美妆与保健品的仓储与库存管理，高频小件订单处理与本地发货支持，包装、批次与出货管理配合。",
    href: "/industries/beauty",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                INDUSTRIES
              </p>
              <h1 className="text-3xl font-bold text-foreground lg:text-[40px]">
                行业解决方案
              </h1>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                不同产品在仓储、履约、配送和售后上的要求并不相同。Cube Cang 结合不同行业的业务特点，为客户提供更符合实际运营需求的英国本地物流支持。
              </p>
            </div>
          </div>
        </section>

        {/* Industries grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-lg bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    了解详情
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
