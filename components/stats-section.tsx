"use client";

import { useEffect, useRef, useState } from "react";
import { Warehouse, Maximize, Package, Handshake } from "lucide-react";

const stats = [
  {
    icon: Warehouse,
    value: 3,
    suffix: "+海外仓",
    label: "曼彻斯特、利物浦、伦敦建有海外仓",
  },
  {
    icon: Maximize,
    value: 10000,
    suffix: "+平米",
    label: "仓库空间充足",
  },
  {
    icon: Package,
    value: 5000,
    suffix: "+订单",
    label: "日均处理订单量",
  },
  {
    icon: Handshake,
    value: 50,
    suffix: "+物流商合作",
    label: "与多家国际知名物流企业达成合作关系",
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
  isVisible,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
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
          <span className="text-sm font-semibold text-muted-foreground ml-0.5">
            {suffix.replace(/^\d+/, "")}
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
