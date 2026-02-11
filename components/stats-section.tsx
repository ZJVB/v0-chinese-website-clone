"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 312000, label: "年度拣货发货量", suffix: "+", prefix: "" },
  { value: 50000, label: "托盘检查量", suffix: "+", prefix: "" },
  { value: 500000, label: "精准拣货量", suffix: "+", prefix: "" },
  { value: 80000, label: "平方英尺托盘存储", suffix: "", prefix: "" },
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
  prefix: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2500, isVisible);

  return (
    <div className="relative text-center">
      <p className="text-4xl font-black tabular-nums text-primary-foreground lg:text-5xl xl:text-6xl">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </p>
      <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-accent/40" />
      <p className="mt-3 text-sm font-medium text-primary-foreground/70 lg:text-base">
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
    <section
      id="stats"
      className="relative overflow-hidden bg-primary py-20 lg:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/warehouse-operations.jpg"
          alt="仓库运营"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            我们的经验
          </p>
          <h2 className="mb-16 text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
            深受英国成长型企业信赖的电商履约合作伙伴
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
