"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 4,
    title: "HMRC 认可的合规海外仓服务商",
    subtitle: "Cube海外仓作为英国税务及海关总署（HMRC）认可的海外仓服务商。依托规范的运营体系与成熟的本地履约能力，我们为跨境卖家提供安全、透明、可靠的英国仓储及订单履约服务。",
    image: "/images/hero-hmrc-new.jpg",
    link: "/about",
    linkText: "了解更多",
  },
  {
    id: 2,
    title: "构建更高效的英国本地供应链",
    subtitle: "从 FBA 备货、中转分拨到零售配送，帮助客户提升库存灵活性、发货效率和本地交付能力。",
    image: "/images/service-fba.jpg",
    link: "/warehousing",
    linkText: "了解仓储服务",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const currentBanner = banners[currentSlide];

  return (
    <section 
      className="relative h-[600px] w-full overflow-hidden sm:h-[650px] lg:h-[700px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.id === 4 ? "from-[#041653]/70 via-[#041653]/40 to-transparent" : "from-[#041653]/90 via-[#041653]/70 to-[#041653]/30"}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        {/* Left side - Text content */}
        <div className="pt-16 max-w-2xl">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
            >
              <h1 className="mb-5 text-[26px] font-bold leading-[1.25] text-white sm:text-[32px] lg:text-[42px] text-balance">
                {banner.title}
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg text-pretty">
                {banner.subtitle}
              </p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-md px-7 py-5 text-base font-semibold"
            >
              <Link href={currentBanner.link}>
                {currentBanner.linkText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 bg-transparent rounded-md px-7 py-5 text-base"
            >
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-3 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
