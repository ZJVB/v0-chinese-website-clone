"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "服务项目" },
  { href: "#integrations", label: "平台集成" },
  { href: "#stats", label: "业绩数据" },
  { href: "#testimonials", label: "客户评价" },
  { href: "#process", label: "合作流程" },
  { href: "#news", label: "新闻资讯" },
  { href: "#contact", label: "联系我们" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span className="text-lg font-bold text-primary-foreground">
              MSL
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              MSL UK Ltd
            </span>
            <span className="text-[11px] font-medium text-muted-foreground leading-tight tracking-wide">
              电商物流专家
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:left-3 hover:after:w-[calc(100%-24px)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:01616223633"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            0161 622 3633
          </a>
          <Button asChild className="gap-1.5">
            <a href="#contact">
              获取报价
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
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
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href="tel:01616223633"
                className="flex items-center gap-2 px-3 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                0161 622 3633
              </a>
              <Button asChild className="w-full">
                <a href="#contact">获取报价</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
