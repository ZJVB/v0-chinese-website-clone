import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const solutions = [
  { title: "FBA 备货与转运服务", href: "/solutions/fba" },
  { title: "D2C 一件代发", href: "/solutions/d2c" },
  { title: "B2B 零售分销", href: "/solutions/b2b" },
  { title: "售后退货与履约保障", href: "/solutions/returns" },
  { title: "检测、翻新与二次销售", href: "/solutions/refurbishment" },
  { title: "增值服务", href: "/solutions/value-added" },
];

export function SolutionsEntrySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="按您的业务模式选择"
          highlight="更适合的英国物流方案"
          subtitle="不同客户面对的物流问题并不相同。我们将常见需求拆分为多个业务方案，方便您快速找到适合自身业务结构的服务方向。"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between rounded-lg bg-card p-5 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
