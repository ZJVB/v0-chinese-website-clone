import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          alt="Cube Fulfilment 仓储中心"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-black leading-[1.1] text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            英国专业电商
            <span className="block text-accent">仓储物流服务</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Cube Fulfilment
            为您提供高效、可靠的电商仓储与第三方物流服务，涵盖拣货、包装、配送及库存管理，助力品牌快速增长。
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 font-semibold"
              asChild
            >
              <Link href="/services">了解我们的服务</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 text-base"
              asChild
            >
              <Link href="/contact">联系我们</Link>
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
    </section>
  );
}
