"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务项目" },
  { href: "/integrations", label: "平台集成" },
  { href: "/news", label: "新闻资讯" },
  { href: "/contact", label: "联系我们" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/98 shadow-md backdrop-blur-lg"
          : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      } border-b border-border`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-transform group-hover:scale-105">
            <span className="text-sm font-black tracking-tight text-primary-foreground">
              CUBE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              Cube Fulfilment
            </span>
            <span className="text-[10px] font-medium text-muted-foreground leading-tight tracking-wide uppercase">
              电商物流专家
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="tel:01616223633"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            0161 622 3633
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="切换菜单"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 border-t border-border pt-3">
              <a
                href="tel:01616223633"
                className="flex items-center gap-2 px-3 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                0161 622 3633
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
