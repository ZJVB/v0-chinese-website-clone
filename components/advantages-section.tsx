import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left - content */}
          <div className="flex-1">
            <h2 className="mb-1 text-3xl font-bold text-foreground lg:text-[40px]">
              CUBE的优势
            </h2>
            <div className="relative mt-1 inline-block">
              <span className="text-3xl font-bold text-foreground lg:text-[40px]">
                为何选择我们
              </span>
              <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Cube英国海外仓依托先进的仓储管理系统（WMS），提供智能化库存管理、灵活存储解决方案，确保卖家能够高效控制库存状态，减少滞销与断货风险，提高供应链的运营效率
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-md"
              >
                <Link href="/about">
                  About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - stats grid */}
          <div className="grid w-full max-w-md grid-cols-2 gap-4">
            {[
              { num: "98%", label: "订单履约率" },
              { num: "99%", label: "客户满意度" },
              { num: "27%", label: "价格节约" },
              { num: "5000+", label: "日均处理订单量" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center"
              >
                <span className="text-3xl font-black text-primary lg:text-4xl">
                  {item.num}
                </span>
                <span className="mt-2 text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
