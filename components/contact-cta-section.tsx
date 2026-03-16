import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="bg-[#051851] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left - CTA */}
          <div className="lg:col-span-2">
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-[28px] lg:leading-[1.3]">
              正在寻找可靠的英国本地物流伙伴？
            </h2>
            <p className="mb-6 text-sm text-white/60 leading-relaxed">
              欢迎联系我们，获取适合您业务的仓储与履约方案。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="default" className="gap-2 rounded-md px-6">
                <Link href="/contact">
                  联系我们
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-md px-6"
              >
                <Link href="/contact">获取报价</Link>
              </Button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="mb-0.5 text-xs font-medium text-white/80">电话</h4>
                  <p className="text-sm text-white/50">+44 161 566 2392</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="mb-0.5 text-xs font-medium text-white/80">邮箱</h4>
                  <p className="text-sm text-white/50 break-all">contact@thecubedistribution.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <QrCode className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="mb-0.5 text-xs font-medium text-white/80">微信咨询</h4>
                  <p className="text-sm text-white/50">扫码添加客服</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 pt-4 border-t border-white/10">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="mb-0.5 text-xs font-medium text-white/80">地址</h4>
                <p className="text-sm text-white/50">
                  Zainhub Gate2, Lord North Street, Manchester, M40 8HT, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
