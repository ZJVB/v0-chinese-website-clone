import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Shield, text: "安全可靠" },
  { icon: Clock, text: "快速配送" },
  { icon: TrendingUp, text: "助力增长" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-warehouse.jpg"
          alt="MSL UK 仓储中心"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              值得信赖的电商物流解决方案
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.1] text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            英国电商仓储
            <br />
            <span className="text-accent">与第三方物流服务</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 lg:text-xl text-pretty">
            MSL UK
            为您提供简单高效的电商仓储服务。我们专业的3PL团队提供快速、可靠的拣货、包装和配送服务，帮助在线零售商高效增长和扩展业务。从初创企业到知名品牌，我们量身定制仓储方案。
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 font-semibold"
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
              className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 py-6 text-base"
              asChild
            >
              <a href="tel:01616223633" className="gap-2">
                <Phone className="h-4 w-4" />
                立即致电: 0161 622 3633
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-2 text-primary-foreground/70"
              >
                <h.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 50 960 0 720 30C480 60 240 10 0 40L0 60Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
}
