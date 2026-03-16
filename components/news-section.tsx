"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const newsItems = [
  {
    title: "TEMU 官方认证仓履约表现持续位居前列",
    description: "Cube Cang 作为 TEMU 官方认证仓，在多个周期的履约数据评估中持续保持优异表现。",
    date: "2025-01",
    image: "/images/news-temu.jpg",
  },
  {
    title: "英国本地仓储与履约能力持续升级",
    description: "围绕多平台履约、退货处理与本地配送需求，持续完善仓储与运营能力。",
    date: "2024-12",
    image: "/images/news-warehouse.jpg",
  },
  {
    title: "持续拓展合作机会与业务模式",
    description: "围绕仓储、配送、系统对接与供应链优化，推动更多合作场景落地。",
    date: "2024-11",
    image: "/images/news-partnership.jpg",
  },
  {
    title: "TEMU 官方认证仓履约表现持续位居前列",
    description: "Cube Cang 作为 TEMU 官方认证仓，在多个周期的履约数据评估中持续保持优异表现。",
    date: "2025-01",
    image: "/images/news-temu.jpg",
  },
  {
    title: "英国本地仓储与履约能力持续升级",
    description: "围绕多平台履约、退货处理与本地配送需求，持续完善仓储与运营能力。",
    date: "2024-12",
    image: "/images/news-warehouse.jpg",
  },
];

export function NewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <SectionTitle
            title="公司"
            highlight="最新动态"
            subtitle="了解 Cube Cang 的最新业务进展、仓储与履约能力更新、合作动态及市场活动信息。"
            className="mb-0"
          />
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-white hover:border-primary"
              aria-label="向左滚动"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-white hover:border-primary"
              aria-label="向右滚动"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href="/news"
              className="group flex-shrink-0 w-[320px] md:w-[380px] snap-start"
            >
              <div className="overflow-hidden rounded-xl bg-background shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    {item.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-base font-semibold text-foreground leading-snug line-clamp-2 transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    阅读更多
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-md">
            <Link href="/news">
              查看全部动态
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
