import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactCtaSection } from "@/components/contact-cta-section";
import {
  BadgeCheck,
  Package,
  ShoppingBag,
  Building2,
  RotateCcw,
  RefreshCw,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "解决方案 - Cube Cang",
  description:
    "Cube Cang 提供 TEMU 官方认证仓、FBA 备货与转运、D2C 一件代发、B2B 零售分销、退货处理等英国本地物流解决方案。",
};

const solutions = [
  {
    icon: BadgeCheck,
    title: "TEMU 官方认证仓",
    description: "为 TEMU 平台卖家提供标准化仓储、订单履约与本地发货支持。作为 TEMU 官方认证仓，Cube Cang 在多个周期的履约数据评估中持续保持优异表现。",
    href: "/solutions/temu",
    featured: true,
  },
  {
    icon: Package,
    title: "FBA 备货与转运服务",
    description: "支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存。",
    href: "/solutions/fba",
  },
  {
    icon: ShoppingBag,
    title: "D2C 一件代发",
    description: "支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。",
    href: "/solutions/d2c",
  },
  {
    icon: Building2,
    title: "B2B 零售分销",
    description: "适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。",
    href: "/solutions/b2b",
  },
  {
    icon: RotateCcw,
    title: "售后退货与履约保障",
    description: "提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。",
    href: "/solutions/returns",
  },
  {
    icon: RefreshCw,
    title: "检测、翻新与二次销售",
    description: "外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。",
    href: "/solutions/refurbishment",
  },
  {
    icon: Wrench,
    title: "增值服务",
    description: "贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理。",
    href: "/solutions/value-added",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                SOLUTIONS
              </p>
              <h1 className="text-3xl font-bold text-foreground lg:text-[40px]">
                解决方案
              </h1>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                根据您的业务模式、订单结构和产品类型，选择更适合的英国本地物流方案。Cube Cang 提供从仓储、履约、配送到售后的全链路服务支持。
              </p>
            </div>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group flex flex-col rounded-lg p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
                    item.featured ? "bg-primary/5 border-2 border-primary/20" : "bg-card"
                  }`}
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  {item.featured && (
                    <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      官方认证
                    </span>
                  )}
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
