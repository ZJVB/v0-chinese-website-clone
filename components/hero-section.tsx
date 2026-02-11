"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    label: "System Solution",
    titleLine1: "跨境电商",
    titleAccent: "'一站式'",
    subtitle: "仓储与物流解决方案",
    description:
      "Cube英国海外仓专为跨境电商企业提供高效、灵活、定制化的仓储与物流服务，助您在英国及欧洲市场快速增长，优化供应链，提升客户满意度",
    image: "/images/hero-warehouse.jpg",
  },
  {
    label: "System Solution",
    titleLine1: "全链路",
    titleAccent: "'自动化'",
    subtitle: "订单管理",
    description:
      "订单自动同步全球电商平台，实时库存联动扣减，智能规则分配就近仓库发货，杜绝超卖缺货风险",
    image: "/images/warehouse-operations.jpg",
  },
  {
    label: "System Solution",
    titleLine1: "品牌",
    titleAccent: "'定制化'",
    subtitle: "增值服务",
    description:
      "提供专属品牌包装设计，支持多SKU组合发运节省物流成本，灵活适配黑五、圣诞等大促主题包装",
    image: "/images/hero-warehouse.jpg",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[520px] w-full overflow-hidden sm:h-[580px] lg:h-[660px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="Cube Fulfilment"
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-xl pt-20">
          <span className="mb-5 inline-block rounded bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
            {slide.label}
          </span>
          <h1 className="mb-1 text-[36px] font-medium leading-[1.2] text-white sm:text-[43px]">
            {slide.titleLine1}
            <span className="text-[#1890FF]">{slide.titleAccent}</span>
          </h1>
          <p className="mb-4 text-[24px] text-white/90 sm:text-[29px]">
            {slide.subtitle}
          </p>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/65 lg:text-base text-pretty">
            {slide.description}
          </p>
          <div className="flex gap-3">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-md px-7 py-5 text-sm font-semibold"
            >
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-md px-7 py-5 text-sm"
            >
              <Link href="/services">了解服务</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
