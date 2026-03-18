import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "HMRC 认可", label: "FHDDS 认证服务商" },
  { value: "20,000+", label: "日订单处理量" },
  { value: "20,000㎡+", label: "仓储面积" },
  { value: "24/7", label: "安保监控系统" },
  { value: "15年+", label: "团队经验" },
];

export function StatsSection() {
  return (
    <section className="bg-white">
      {/* Stats Banner - Split Design with Diagonal Divider */}
      <div className="relative flex flex-col lg:flex-row overflow-hidden">
        {/* Left - Title Section */}
        <div className="relative bg-[#2d3a4f] px-8 py-8 lg:px-12 lg:py-10 lg:w-[320px] flex items-center justify-center lg:justify-start z-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
            我们的成绩
          </h2>
          {/* Diagonal divider - slanted edge */}
          <div className="hidden lg:block absolute top-0 -right-8 w-16 h-full bg-[#2d3a4f] transform skew-x-[-12deg]" />
        </div>
        
        {/* Right - Stats Section */}
        <div className="flex-1 bg-primary">
          <div className="grid grid-cols-2 lg:grid-cols-5 h-full">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 lg:py-8 px-3 lg:px-4 border-b border-r border-white/10 lg:border-b-0 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
              >
                <div className={`font-bold text-white mb-1 text-center ${index === 0 ? 'text-lg lg:text-xl' : 'text-2xl lg:text-3xl'}`}>
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/80 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
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
