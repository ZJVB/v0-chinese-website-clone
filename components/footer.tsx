import Link from "next/link";
import { Phone, Mail, MapPin, QrCode, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#041653]">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            正在寻找可靠的英国本地物流合作伙伴？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/70">
            欢迎联系我们，获取适合您业务模式、订单结构和产品品类型的英国仓储与履约方案。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">获取报价</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-white">总部地址</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Zainhub Gate2, Lord North Street,<br />
                  Manchester, M40 8HT, United Kingdom
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-white">电话</h4>
                <a
                  href="tel:+441615662392"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  +44 161 566 2392 / 7599588577
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-white">邮箱</h4>
                <a
                  href="mailto:contact@thecubedistribution.com"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  contact@thecubedistribution.com
                </a>
              </div>
            </div>

            {/* WeChat */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <QrCode className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-white">微信联系</h4>
                <p className="text-sm text-white/60">请扫描二维码添加</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Cube Distribution Service Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
