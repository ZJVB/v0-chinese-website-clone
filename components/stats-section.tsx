"use client";

import { useEffect, useRef, useState } from "react";
import { Warehouse, Maximize, Users, Shield } from "lucide-react";

const stats = [
  {
    icon: Warehouse,
    value: 30000,
    suffix: "+",
    unit: "平方米",
    label: "仓储面积",
  },
  {
    icon: Shield,
    value: 24,
    suffix: "",
    unit: "小时",
    label: "全天候安保与CCTV监控",
  },
  {
    icon: Users,
    value: 15,
    suffix: "+",
    unit: "年",
    label: "管理团队行业经验",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    unit: "人",
    label: "专业团队规模",
  },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationId: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  unit,
  isVisible,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  unit: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="flex items-center gap-5 rounded-lg bg-card p-6 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)]">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-black tabular-nums text-foreground lg:text-3xl">
          {count.toLocaleString()}
          <span className="text-primary">{suffix}</span>
          <span className="text-sm font-semibold text-muted-foreground ml-1">
            {unit}
          </span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground leading-snug">
          {label}
        </p>
      </div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-card py-16 lg:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
