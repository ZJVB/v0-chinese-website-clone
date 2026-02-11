"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">
              MSL
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              MSL UK Ltd
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              电商物流专家
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:01616223633"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            0161 622 3633
          </a>
          <Button asChild>
            <a href="#contact">获取报价</a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="切换菜单"
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
