"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Banner image */}
      <div className="relative h-[480px] sm:h-[540px] lg:h-[620px]">
        <Image
          src="/images/hero-warehouse.jpg"
          alt="Cube Fulfilment 仓储中心"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                跨境电商一站式仓储与物流
              </p>
              <h1 className="mb-2 text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-[64px]">
                <span className="block">跨境电商</span>
                <span className="text-primary">{'\'一站式\''}</span>
              </h1>
              <p className="mb-2 text-2xl font-medium text-white/90 md:text-[32px]">
                仓储与物流解决方案
              </p>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/65 text-pretty">
                Cube英国海外仓专为跨境电商企业提供高效、灵活、定制化的仓储与物流服务，助您在英国及欧洲市场快速增长，优化供应链，提升客户满意度
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 font-semibold rounded-md"
                  asChild
                >
                  <Link href="/services">了解我们的服务</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 text-base rounded-md"
                  asChild
                >
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
