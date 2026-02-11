import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "英国海外仓", href: "/services/uk-warehouse" },
  { label: "国际集运物流", href: "/services/consolidation" },
  { label: "国际海运", href: "/services/sea-freight" },
  { label: "国际空运", href: "/services/air-freight" },
];

const quickLinks = [
  { label: "关于我们", href: "/about" },
  { label: "服务项目", href: "/services" },
  { label: "信息化", href: "/integrations" },
  { label: "新闻资讯", href: "/news" },
  { label: "联系我们", href: "/contact" },
];

const usefulLinks = [
  { label: "17track", href: "https://www.17track.net" },
  { label: "51tracking", href: "https://www.51tracking.com" },
  { label: "Exchange Rate Query", href: "#" },
  { label: "Flight Search", href: "#" },
  { label: "HS Code Lookup", href: "#" },
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
                  Cube Fulfilment
                </span>
                <span className="text-[10px] font-medium text-white/50 leading-tight tracking-wide uppercase">
                  Cube Distribution Service Ltd
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Cube Fulfilment
              是您值得信赖的英国电商仓储与第三方物流合作伙伴，助力品牌高效增长。
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:01616223633"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                0161 622 3633
              </a>
              <a
                href="mailto:contact@bnj-global.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@bnj-global.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                109 Portland Street, Manchester, M1 6DN
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              Page Navigation
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

          {/* Useful Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
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
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Cube Distribution Service Ltd.
              保留所有权利。
            </p>
            <p className="text-sm text-white/40">www.cubefulfilment.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
