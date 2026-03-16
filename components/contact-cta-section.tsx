import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="bg-[#051851] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - CTA Text */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
              正在寻找可靠的英国本地物流合作伙伴？
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/70 lg:text-lg">
              欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-md px-8"
              >
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

          {/* Right - Contact Info & QR Codes */}
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm lg:p-8">
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">电话</h4>
                  <p className="text-sm text-white/60">+44 161 566 2392</p>
                  <p className="text-sm text-white/60">+44 7599 588577</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">邮箱</h4>
                  <p className="text-sm text-white/60 break-all">contact@thecubedistribution.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">总部地址</h4>
                  <p className="text-sm text-white/60">
                    Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="mb-4 text-sm font-semibold text-white">扫码咨询</h4>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                    <QrCode className="h-10 w-10 text-white/40" />
                  </div>
                  <span className="text-xs text-white/50">微信客服1</span>
                </div>
                <div className="text-center">
                  <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                    <QrCode className="h-10 w-10 text-white/40" />
                  </div>
                  <span className="text-xs text-white/50">微信客服2</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-white/50">欢迎扫码与我们直接沟通业务合作</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
