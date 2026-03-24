"use client";

import { useEffect, useRef, useState } from "react";

interface SectionTitleProps {
  title: string;
  highlight: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  center = true,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={center ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold text-foreground lg:text-[40px] lg:leading-[48px]">
        {title}
        <span className="relative ml-1 inline-block">
          {highlight}
          <span
            className={`absolute inset-x-0 bottom-0 top-[60%] -z-10 bg-primary/20 transition-transform duration-700 ease-out ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-[888px] text-base leading-relaxed text-muted-foreground lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
