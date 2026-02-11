"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 312000, label: "年度拣货发货量", suffix: "+" },
  { value: 50000, label: "托盘检查量", suffix: "+" },
  { value: 500000, label: "精准拣货量", suffix: "+" },
  { value: 80000, label: "平方英尺仓储面积", suffix: "" },
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
  value,
  label,
  suffix,
  isVisible,
}: {
  value: number;
  label: string;
  suffix: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2500, isVisible);

  return (
    <div className="text-center">
      <p className="text-3xl font-black tabular-nums text-accent-foreground lg:text-4xl xl:text-5xl">
        {count.toLocaleString()}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-primary/40" />
      <p className="mt-3 text-sm font-medium text-accent-foreground/65">
        {label}
      </p>
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
    <section className="relative overflow-hidden bg-accent py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/warehouse-operations.jpg"
          alt="仓库运营"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-accent-foreground lg:text-4xl text-balance">
            值得信赖的履约合作伙伴
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
