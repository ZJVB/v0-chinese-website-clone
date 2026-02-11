import { Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "快速准时的订单履约",
  "严格的SLA合规标准",
  "周末运营支持",
  "实时库存追踪",
];

export function PrimeBadgeSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary shadow-2xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 lg:p-14">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Amazon Prime 认证
                </span>
              </div>
              <h2 className="mb-5 text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
                我们帮助他们获得了 Prime 徽章，
                <span className="text-accent">下一个可能是您</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-primary-foreground/75 text-pretty">
                每个 Prime
                徽章的背后，都是卓越的物流交付能力。MSL UK 帮助品牌达到
                Amazon 的严格标准，实现 Prime 资格认证。
              </p>
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-primary-foreground/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-6"
                size="lg"
                asChild
              >
                <a href="#contact">
                  了解更多
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative flex items-center justify-center p-8 lg:p-14">
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-8 backdrop-blur-sm">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={`prime-star-${i}`}
                      className="h-4 w-4 rounded-full bg-accent/80"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic leading-relaxed text-primary-foreground/90">
                  {`"Adeel和他的团队非常出色。从了解我们的业务需求，到制定工作范围，再到交付卓越的价值和高质量SLA成果。与MSL合作让我感到非常安心。"`}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Andy Welch</p>
                    <p className="text-sm text-primary-foreground/60">
                      SRSLY CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
