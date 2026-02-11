import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-warehouse.jpg"
          alt="MSL UK 仓储中心"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            值得信赖的电商物流解决方案
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground lg:text-6xl text-balance">
            英国电商仓储与第三方物流服务
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 lg:text-xl">
            MSL UK
            为您提供简单高效的电商仓储服务。我们专业的3PL团队提供快速、可靠的拣货、包装和配送服务，帮助在线零售商高效增长和扩展业务。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="#contact" className="gap-2">
                获取免费报价
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a href="tel:01616223633" className="gap-2">
                <Phone className="h-4 w-4" />
                立即致电: 0161 622 3633
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
