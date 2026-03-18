import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            开启合作
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            正在寻找可靠的英国本地物流伙伴？
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button asChild size="lg" className="gap-2 rounded-full px-8 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 transition-all duration-300"
            >
              <Link href="/contact">获取报价</Link>
            </Button>
          </div>
          
          {/* Quick contact info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <a href="tel:+441615662392" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span>+44 161 566 2392</span>
            </a>
            <a href="mailto:contact@thecubedistribution.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span>contact@thecubedistribution.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
