"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "我们评估了近20家英国电商仓库供应商，很高兴最终选择与MSL合作。从最初了解我们的业务到快速准确的入驻，以及他们对细节的关注，都给我们留下了深刻印象。我们的3PL业务交给他们非常放心，让我们可以专注于自身擅长的领域。",
    author: "Brendan Kennedy",
    title: "总监",
    company: "TTP Hard Drills Limited",
  },
  {
    quote:
      "Adeel和他的团队非常出色。从了解我们的业务需求，到制定符合运营的工作范围，再到交付卓越的价值和高质量的SLA成果。我们现在正在扩展周末运营和Prime履约。与MSL合作让我感到非常安心。",
    author: "Andy Welch",
    title: "首席执行官",
    company: "Healthy Ventures Ltd",
  },
  {
    quote:
      "我们与MSL合作已有一段时间，我强烈推荐他们的服务。出现的任何问题都会得到及时处理。他们的客户支持非常及时，在日常业务中为我们履行订单提供了大力支持。",
    author: "Rebecca Moffat",
    title: "总监",
    company: "R M Clinic",
  },
  {
    quote: "我们与MSL合作处理所有履约业务已超过一年，非常满意！",
    author: "Rosie William",
    title: "总监",
    company: "Nii HAi Ltd",
  },
  {
    quote:
      "我一直在使用MSL UK LTD的3PL服务，他们的服务非常出色。团队专业、高效、可靠，始终超出我们的期望。强烈推荐给需要一流物流支持的企业。",
    author: "Yanwen Chen",
    title: "首席执行官",
    company: "Phinxt Robotics Ltd",
  },
  {
    quote:
      "我使用该设施已约6个月，发现运营非常顺畅。始终提供优质的客户服务，所有回复都及时且专业。服务可靠，员工友好，价格合理，服务无可挑剔。强烈推荐。",
    author: "Jackie",
    title: "总监",
    company: "",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    [],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    [],
  );

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            客户评价
          </p>
          <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">
            听听客户怎么说
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-8 lg:p-12">
            <Quote className="absolute left-6 top-6 h-12 w-12 text-primary/8 lg:left-8 lg:top-8 lg:h-16 lg:w-16" />
            <div className="relative">
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`star-${current}-${i}`}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mb-8 min-h-[100px] text-lg leading-relaxed text-foreground lg:text-xl text-pretty">
                {`"${t.quote}"`}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.author}
                    <span className="font-normal text-muted-foreground">
                      {", "}
                      {t.title}
                    </span>
                  </p>
                  {t.company && (
                    <p className="text-sm font-medium text-primary">
                      {t.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border p-2.5 text-foreground transition-all hover:bg-muted hover:border-primary/30"
              aria-label="上一条"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  type="button"
                  key={`dot-${testimonials[i].author}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`切换到第 ${i + 1} 条评价`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-border p-2.5 text-foreground transition-all hover:bg-muted hover:border-primary/30"
              aria-label="下一条"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
