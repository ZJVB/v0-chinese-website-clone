import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Warehouse, Cctv, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20,000+", label: "日订单处理量", icon: Package },
  { value: "20,000㎡+", label: "仓储面积", icon: Warehouse },
  { value: "24/7", label: "安保监控系统", icon: Cctv },
  { value: "15年+", label: "团队经验", icon: Users },
];

export function StatsSection() {
  return (
    <section className="bg-white">
      {/* Stats Banner - Full Width with Alternating Colors */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {stats.map((stat, index) => {
          const isOrange = index % 2 === 0;
          const nextIsOrange = (index + 1) % 2 === 0;
          const orangeColor = '#ff5500';
          const blueColor = '#2d3a4f';
          return (
            <div 
              key={stat.label} 
              className="flex w-1/2 lg:w-auto lg:flex-1"
            >
              {/* Content area */}
              <div 
                className="group flex-1 flex flex-col items-center justify-center py-6 lg:py-8 px-4 lg:px-8"
                style={{ backgroundColor: isOrange ? orangeColor : blueColor }}
              >
                <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white/90 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 text-center transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/80 text-center">{stat.label}</div>
              </div>
              
              {/* Diagonal divider (desktop only) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:flex w-0 relative">
                  <svg 
                    className="absolute left-0 top-0 h-full w-6" 
                    viewBox="0 0 24 100" 
                    preserveAspectRatio="none"
                  >
                    <polygon 
                      points="0,0 24,0 0,100" 
                      fill={isOrange ? orangeColor : blueColor} 
                    />
                    <polygon 
                      points="24,0 24,100 0,100" 
                      fill={nextIsOrange ? orangeColor : blueColor} 
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>


    </section>
  );
}
