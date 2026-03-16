import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-orange-50 py-16 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            正在寻找可靠的英国本地物流伙伴？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground leading-relaxed">
            欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 rounded-md px-8 shadow-lg shadow-primary/25">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-white rounded-md px-8"
            >
              <Link href="/contact">获取报价</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
