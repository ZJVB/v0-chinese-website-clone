import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "电商履约", href: "/services/ecommerce-fulfilment" },
  { label: "托盘仓储", href: "/services/pallet-storage" },
  { label: "运输配送", href: "/services/transport-delivery" },
  { label: "国际货运代理", href: "/services/freight-forwarding" },
  { label: "智能包装", href: "/services/smart-packaging" },
  { label: "产品摄影", href: "/services/product-photography" },
];

const quickLinks = [
  { label: "关于我们", href: "/about" },
  { label: "服务项目", href: "/services" },
  { label: "平台集成", href: "/integrations" },
  { label: "新闻资讯", href: "/news" },
  { label: "联系我们", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-black text-accent-foreground tracking-tight">
                  CUBE
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Cube Fulfilment
                </span>
                <span className="text-[10px] font-medium text-background/50 leading-tight tracking-wide uppercase">
                  Cube Distribution Service Ltd
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-background/60">
              Cube Fulfilment
              是您值得信赖的英国电商仓储与第三方物流合作伙伴，助力品牌高效增长。
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:01616223633"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                0161 622 3633
              </a>
              <a
                href="mailto:info@cubefulfilment.com"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@cubefulfilment.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Manchester, United Kingdom
              </div>
            </div>
          </div>

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

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-background/40">
              平台集成
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Amazon",
                "eBay",
                "Shopify",
                "TikTok Shop",
                "WooCommerce",
                "Etsy",
              ].map((platform) => (
                <li key={platform}>
                  <Link
                    href="/integrations"
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
              &copy; {new Date().getFullYear()} Cube Distribution Service Ltd.
              保留所有权利。
            </p>
            <p className="text-sm text-background/40">
              www.cubefulfilment.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
