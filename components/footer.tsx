import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "电商仓储履约", href: "#services" },
  { label: "托盘仓储", href: "#services" },
  { label: "运输配送", href: "#services" },
  { label: "国际货运代理", href: "#services" },
  { label: "智能包装", href: "#services" },
  { label: "产品摄影", href: "#services" },
];

const quickLinks = [
  { label: "关于我们", href: "#stats" },
  { label: "服务项目", href: "#services" },
  { label: "客户评价", href: "#testimonials" },
  { label: "合作流程", href: "#process" },
  { label: "新闻资讯", href: "#news" },
  { label: "联系我们", href: "#contact" },
];

const platforms = [
  "Amazon",
  "eBay",
  "Shopify",
  "TikTok Shop",
  "WooCommerce",
  "Etsy",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">
                  MSL
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  MSL UK Ltd
                </span>
                <span className="text-[11px] font-medium text-background/50 leading-tight tracking-wide">
                  电商物流专家
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-background/60">
              MSL UK
              是您值得信赖的英国电商仓储与第三方物流合作伙伴。我们助力在线零售商高效增长和扩展业务。
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:01616223633"
                className="group flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                0161 622 3633
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:info@mslukltd.co.uk"
                className="group flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@mslukltd.co.uk
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Manchester, United Kingdom
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-background/40">
              服务项目
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-background/40">
              快速链接
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-background/40">
              平台集成
            </h3>
            <ul className="flex flex-col gap-2.5">
              {platforms.map((platform) => (
                <li key={platform}>
                  <Link
                    href="#integrations"
                    className="text-sm text-background/60 transition-colors hover:text-accent"
                  >
                    {platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-background/40">
              &copy; {new Date().getFullYear()} MSL UK Ltd. 保留所有权利。
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-background/40 hover:text-accent transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className="text-sm text-background/40 hover:text-accent transition-colors"
              >
                服务条款
              </Link>
              <Link
                href="#"
                className="text-sm text-background/40 hover:text-accent transition-colors"
              >
                Cookie 政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
