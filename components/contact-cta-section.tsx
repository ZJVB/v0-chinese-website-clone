import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="bg-[#051851] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            正在寻找可靠的英国本地物流伙伴？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/60 leading-relaxed">
            欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 rounded-md px-8">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-md px-8"
            >
              <Link href="/contact">获取报价</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
