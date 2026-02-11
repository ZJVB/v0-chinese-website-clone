import { Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrimeBadgeSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Amazon Prime 认证
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
                我们帮助他们获得了 Prime 徽章，下一个可能是您
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-primary-foreground/80">
                每个 Prime 徽章的背后，都是卓越的物流交付能力。MSL UK 帮助品牌达到 Amazon 的严格标准，实现 Prime 资格认证。
              </p>
              <div className="mb-6 flex flex-col gap-3">
                {[
                  "快速准时的订单履约",
                  "严格的SLA合规标准",
                  "周末运营支持",
                  "实时库存追踪",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm text-primary-foreground/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="#contact">了解更多</a>
              </Button>
            </div>
            <div className="relative flex items-center justify-center p-8 lg:p-12">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-8">
                <blockquote className="text-lg italic leading-relaxed text-primary-foreground">
                  {`"Adeel和他的团队非常出色。从了解我们的业务需求，到制定工作范围，再到交付卓越的价值和高质量SLA成果。与MSL合作让我感到非常安心。"`}
                </blockquote>
                <p className="mt-4 font-semibold text-accent">
                  -- Andy Welch, SRSLY CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
