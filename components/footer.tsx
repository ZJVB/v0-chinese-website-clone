import Link from "next/link";
import { Phone, Mail, MapPin, QrCode } from "lucide-react";

const solutionLinks = [
  { label: "TEMU 官方认证仓", href: "/solutions/temu" },
  { label: "FBA 备货与转运", href: "/solutions/fba" },
  { label: "D2C 一件代发", href: "/solutions/d2c" },
  { label: "B2B 零售分销", href: "/solutions/b2b" },
  { label: "售后退货", href: "/solutions/returns" },
  { label: "增值服务", href: "/solutions/value-added" },
];

const quickLinks = [
  { label: "首页", href: "/" },
  { label: "仓储与派送", href: "/warehousing" },
  { label: "行业解决方案", href: "/industries" },
  { label: "技术支持", href: "/technology" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[#041653] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-black text-primary-foreground tracking-tight">
                  CUBE
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white">
                  Cube Cang
                </span>
                <span className="text-[10px] font-medium text-white/50 leading-tight tracking-wide uppercase">
                  Cube Distribution Service Ltd
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              英国本地仓储与履约解决方案，助力品牌高效进入英国市场。为跨境品牌、平台卖家、分销客户提供专业物流支持。
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+441615662392"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +44 161 566 2392 / 7599588577
              </a>
              <a
                href="mailto:contact@thecubedistribution.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@thecubedistribution.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              解决方案
            </h3>
            <ul className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              快速导航
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WeChat QR */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              微信联系
            </h3>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded flex items-center justify-center mb-2">
                  <QrCode className="h-10 w-10 text-white/40" />
                </div>
                <p className="text-xs text-white/50">微信客服1</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded flex items-center justify-center mb-2">
                  <QrCode className="h-10 w-10 text-white/40" />
                </div>
                <p className="text-xs text-white/50">微信客服2</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/40">
              扫码添加微信咨询业务合作
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Cube Distribution Service Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
