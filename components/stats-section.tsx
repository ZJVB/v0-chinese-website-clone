import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20,000+", label: "日订单处理量" },
  { value: "20,000㎡+", label: "仓储面积" },
  { value: "24/7", label: "安保监控系统" },
  { value: "15年+", label: "团队经验" },
];

export function StatsSection() {
  return (
    <section className="bg-white">
      {/* Stats Banner - Full Width with Diagonal Dividers */}
      <div className="bg-primary">
        <div className="flex flex-wrap lg:flex-nowrap">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center w-1/2 lg:w-auto lg:flex-1">
              <div className="flex-1 flex flex-col items-center justify-center py-6 lg:py-8 px-3 lg:px-6">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 text-center">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/80 text-center">{stat.label}</div>
              </div>
              {/* Diagonal divider between items */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block relative w-6 h-full self-stretch">
                  <div 
                    className="absolute inset-0 bg-[#2d3a4f]"
                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TEMU Feature Section - Full background image */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/temu-ranking.jpg"
              alt="TEMU 官方认证仓 - 履约排名前列"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 lg:p-12 lg:max-w-xl">
            <div className="mb-3 inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
              TEMU 官方认证仓
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              履约表现持续位居<span className="text-primary">前列</span>
            </h2>
            <p className="mb-6 text-white/80 leading-relaxed">
              作为 TEMU 官方认证仓，Cube海外仓依托标准化作业流程和稳定的订单处理能力，为平台卖家提供更高效、更可靠的英国本地仓配支持。
            </p>
            <Button asChild className="gap-2 rounded-md">
              <Link href="/solutions/temu">
                了解 TEMU 方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
