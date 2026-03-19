import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#051851] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-black text-white">CUBE</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Cube海外仓</div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-primary">
                  Cube Distribution Service Ltd
                </div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              英国本地仓储与履约解决方案，助力品牌高效进入英国市场。
            </p>
            
            {/* UK Office */}
            <div className="mb-4">
              <h5 className="text-xs font-semibold text-primary mb-2">英国总部</h5>
              <div className="space-y-1.5 text-sm text-white/60">
                <a href="tel:+441615662392" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  +44 161 566 2392
                </a>
                <a href="mailto:contact@thecubedistribution.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                  contact@thecubedistribution.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span className="text-xs">Manchester, M40 8HT, UK</span>
                </div>
              </div>
            </div>

            {/* China Office */}
            <div>
              <h5 className="text-xs font-semibold text-red-400 mb-2">中国办事处</h5>
              <div className="space-y-1.5 text-sm text-white/60">
                <a href="tel:18033414492" className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  张小姐 18033414492
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span className="text-xs">深圳市宝安区怀德翠岗工业园</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary">解决方案</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/solutions/temu" className="hover:text-primary transition-colors">TEMU 官方认证仓</Link></li>
              <li><Link href="/solutions/fba" className="hover:text-primary transition-colors">FBA 备货与转运</Link></li>
              <li><Link href="/solutions/d2c" className="hover:text-primary transition-colors">D2C 一件代发</Link></li>
              <li><Link href="/solutions/b2b" className="hover:text-primary transition-colors">B2B 零售分销</Link></li>
              <li><Link href="/solutions/returns" className="hover:text-primary transition-colors">售后退货</Link></li>
              <li><Link href="/solutions/value-added" className="hover:text-primary transition-colors">增值服务</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary">快速导航</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">首页</Link></li>
              <li><Link href="/warehousing" className="hover:text-primary transition-colors">仓储与派送</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">行业解决方案</Link></li>
              <li><Link href="/technology" className="hover:text-primary transition-colors">技术支持</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* WeChat QR Codes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary">微信联系</h4>
            <div className="flex gap-4">
              <div className="group relative text-center z-20 hover:z-[100]">
                <div className="mb-2 h-20 w-20 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[1.8] group-hover:shadow-xl group-hover:border-primary">
                  <Image src="/images/qr-1.png" alt="微信客服1" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-white/60 group-hover:opacity-0 transition-opacity">微信客服1</span>
              </div>
              <div className="group relative text-center z-10 hover:z-[100]">
                <div className="mb-2 h-20 w-20 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[1.8] group-hover:shadow-xl group-hover:border-primary">
                  <Image src="/images/qr-2.png" alt="微信客服2" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-white/60 group-hover:opacity-0 transition-opacity">微信客服2</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/60">鼠标悬停放大二维码</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Cube Distribution Service Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
