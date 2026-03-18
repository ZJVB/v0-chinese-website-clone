import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "时尚服饰",
    href: "/industries#fashion",
    image: "/images/industry-fashion.jpg",
  },
  {
    title: "新能源电池",
    href: "/industries#energy",
    image: "/images/industry-energy.jpg",
  },
  {
    title: "消费电子",
    href: "/industries#electronics",
    image: "/images/industry-electronics.jpg",
  },
  {
    title: "家居用品",
    href: "/industries#home",
    image: "/images/industry-furniture.jpg",
  },
  {
    title: "美妆健康",
    href: "/industries#health",
    image: "/images/industry-beauty.jpg",
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="py-12 lg:py-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          行业覆盖
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
          覆盖多个<span className="text-primary">重点行业</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4">
          针对不同品类特性提供定制化仓储与履约方案
        </p>
      </div>

      {/* Industry Cards - Full Width with Strong Layered Effect */}
      <div className="relative flex flex-wrap lg:flex-nowrap">
        {industries.map((industry, index) => (
          <Link
            key={industry.title}
            href={industry.href}
            className="group relative w-1/2 md:w-1/3 lg:w-1/5 aspect-[4/5] lg:aspect-[3/4] overflow-hidden transition-all duration-500 hover:z-30 hover:scale-105"
            style={{ 
              zIndex: industries.length - index,
              marginLeft: index > 0 ? '-24px' : '0',
            }}
          >
            {/* Card Shadow/Border for depth */}
            <div className="absolute inset-0 shadow-[-16px_0_40px_rgba(0,0,0,0.6)] z-0" />
            
            {/* Image */}
            <Image
              src={industry.image}
              alt={industry.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Left Edge Deep Shadow */}
            {index > 0 && (
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
            )}
            
            {/* Top Left Corner Shadow */}
            {index > 0 && (
              <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-black/60 to-transparent z-10 pointer-events-none" />
            )}
            
            {/* Bottom Left Corner Shadow */}
            {index > 0 && (
              <div className="absolute left-0 bottom-0 w-40 h-40 bg-gradient-to-tr from-black/60 to-transparent z-10 pointer-events-none" />
            )}
            
            {/* Right Edge Light Border */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/40 z-10 pointer-events-none" />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-center justify-end gap-3 z-10">
              <span className="text-white font-bold text-sm lg:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {industry.title}
              </span>
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 shadow-lg">
                <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
