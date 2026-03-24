import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

import {
  BadgeCheck,
  Package,
  ShoppingBag,
  Building2,
  RotateCcw,
  RefreshCw,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "解决方案 - Cube海外仓",
  description:
    "Cube海外仓 提供 TEMU 官方认证仓、FBA 备货与转运、D2C 一件代发、B2B 零售分销、退货处理等英国本地物流解决方案。",
};

const featuredSolution = {
  icon: BadgeCheck,
  title: "TEMU 官方认证仓",
  subtitle: "履约表现持续位居前列",
  description: "作为 TEMU 官方认证仓，Cube海外仓在多个周期的履约数据评估中持续保持优异表现。为 TEMU 平台卖家提供标准化仓储、订单履约与本地发货支持。",
  href: "/solutions/temu",
  image: "/images/hero-temu.jpg",
  features: [
    "标准化作业流程",
    "稳定的订单处理能力",
    "英国本地履约资源",
    "高效的仓配支持",
  ],
};

const solutions = [
  {
    icon: Package,
    title: "FBA 备货与转运",
    description: "支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存。",
    href: "/solutions/fba",
    image: "/images/service-fba.jpg",
  },
  {
    icon: ShoppingBag,
    title: "D2C 一件代发",
    description: "支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。",
    href: "/solutions/d2c",
    image: "/images/service-d2c.jpg",
  },
  {
    icon: Building2,
    title: "B2B 零售分销",
    description: "适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。",
    href: "/solutions/b2b",
    image: "/images/service-b2b.jpg",
  },
  {
    icon: RotateCcw,
    title: "退货与售后支持",
    description: "提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。",
    href: "/solutions/returns",
    image: "/images/service-returns.jpg",
  },
  {
    icon: RefreshCw,
    title: "检测翻新与二次销售",
    description: "外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。",
    href: "/solutions/refurbishment",
    image: "/images/service-refurbishment.jpg",
  },
  {
    icon: Wrench,
    title: "增值服务",
    description: "贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理。",
    href: "/solutions/value-added",
    image: "/images/service-value-added.jpg",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="SOLUTIONS"
          title="解决方案"
          description="根据您的业务模式、订单结构和产品类型，选择更适合的英国本地物流方案"
          image="/images/banner-solutions.jpg"
        />

        {/* Featured Solution - TEMU */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Image */}
              <div className="relative h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={featuredSolution.image}
                  alt={featuredSolution.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                  <BadgeCheck className="h-4 w-4" />
                  官方认证仓
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  重点推荐
                </p>
                <h2 className="mb-2 text-3xl font-bold text-foreground lg:text-4xl">
                  {featuredSolution.title}
                </h2>
                <p className="mb-4 text-lg text-primary font-medium">
                  {featuredSolution.subtitle}
                </p>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {featuredSolution.description}
                </p>

                {/* Features */}
                <div className="mb-8 grid grid-cols-2 gap-3">
                  {featuredSolution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="group">
                  <Link href={featuredSolution.href}>
                    了解 TEMU 服务
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Solutions */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                MORE SOLUTIONS
              </p>
              <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                更多服务方案
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                从仓储、履约、配送到售后的全链路服务支持
              </p>
            </div>

            {/* Solutions Grid - 3 columns with image on top, text below */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_1px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  {/* Image on Top */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content Below */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                      了解详情
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              不确定哪种方案适合您？
            </h2>
            <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
              我们的团队可以根据您的业务模式、订单结构和产品类型，为您推荐最合适的解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  联系我们咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  了解我们
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
