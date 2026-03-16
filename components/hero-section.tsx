"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tags = [
  "TEMU 官方认证仓",
  "FBA 备货与转运",
  "D2C 一件代发",
  "B2B 零售分销",
  "英国本地配送",
];

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden sm:h-[660px] lg:h-[720px]">
      <Image
        src="/images/hero-warehouse.jpg"
        alt="Cube Cang 英国仓储"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/85 via-[#041653]/60 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl pt-20">
          <h1 className="mb-4 text-[32px] font-bold leading-[1.25] text-white sm:text-[40px] lg:text-[48px] text-balance">
            英国本地仓储与履约解决方案，助力品牌高效进入英国市场
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg text-pretty">
            Cube Cang 为跨境品牌、平台卖家、分销客户及项目型业务提供覆盖英国本地的仓储、订单履约、配送、退货与增值服务支持，帮助客户提升时效、优化库存管理，并改善整体物流体验。
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-md px-8 py-6 text-base font-semibold"
            >
              <Link href="/solutions">
                获取解决方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-md px-8 py-6 text-base"
            >
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
