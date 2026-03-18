import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "时尚服饰",
    href: "/industries/fashion",
    image: "/images/industry-fashion.jpg",
  },
  {
    title: "新能源电池",
    href: "/industries/energy",
    image: "/images/industry-energy.jpg",
  },
  {
    title: "消费电子",
    href: "/industries/electronics",
    image: "/images/industry-electronics.jpg",
  },
  {
    title: "家居用品",
    href: "/industries/home-garden",
    image: "/images/industry-furniture.jpg",
  },
  {
    title: "美妆健康",
    href: "/industries/health",
    image: "/images/industry-beauty.jpg",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#1e1e32] to-[#171728]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            覆盖多个重点行业
          </h2>
          <p className="text-white/60">
            针对不同品类特性提供定制化仓储与履约方案
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <span className="text-white font-medium text-sm lg:text-base">
                  {industry.title}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
