import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const newsItems = [
  {
    title: "TEMU 官方认证仓履约表现持续位居前列",
    description: "Cube Cang 作为 TEMU 官方认证仓，在多个周期的履约数据评估中持续保持优异表现。",
    date: "2025-01",
  },
  {
    title: "英国本地仓储与履约能力持续升级",
    description: "围绕多平台履约、退货处理与本地配送需求，持续完善仓储与运营能力。",
    date: "2024-12",
  },
  {
    title: "持续拓展合作机会与业务模式",
    description: "围绕仓储、配送、系统对接与供应链优化，推动更多合作场景落地。",
    date: "2024-11",
  },
];

export function NewsSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="公司"
          highlight="最新动态"
          subtitle="了解 Cube Cang 的最新业务进展、仓储与履约能力更新、合作动态及市场活动信息。我们会持续分享与英国本地仓储、履约、物流渠道及业务合作相关的最新内容。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg bg-background p-7 shadow-[0_1px_19px_0_rgba(0,0,0,0.06)]"
            >
              <p className="mb-3 text-xs font-medium text-primary">{item.date}</p>
              <h3 className="mb-3 text-base font-semibold text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-md">
            <Link href="/news">
              查看最新动态
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
