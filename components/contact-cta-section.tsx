import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="bg-[#041653] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white lg:text-[40px]">
            正在寻找可靠的英国本地物流合作伙伴？
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 leading-relaxed">
            欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              className="gap-2 rounded-md px-8 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">获取报价</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3 text-white/70">
            <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-white mb-1">总部地址</p>
              <p className="text-sm">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white/70">
            <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-white mb-1">电话</p>
              <p className="text-sm">+44 161 566 2392 / 7599588577</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white/70">
            <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-white mb-1">邮箱</p>
              <p className="text-sm">contact@thecubedistribution.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white/70">
            <QrCode className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-white mb-1">微信联系</p>
              <p className="text-sm">请扫描二维码添加</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
