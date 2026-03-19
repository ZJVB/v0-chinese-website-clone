"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const solutionItems = [
  { label: "TEMU 官方认证仓", href: "/solutions/temu" },
  { label: "FBA 备货与转运服务", href: "/solutions/fba" },
  { label: "D2C 一件代发", href: "/solutions/d2c" },
  { label: "B2B 零售分销", href: "/solutions/b2b" },
  { label: "售后退货与履约保障", href: "/solutions/returns" },
  { label: "检测、翻新与二次销售", href: "/solutions/refurbishment" },
  { label: "增值服务", href: "/solutions/value-added" },
];

const warehouseItems = [
  { label: "仓储网络", href: "/warehousing/network" },
  { label: "全英配送时效", href: "/warehousing/delivery" },
  { label: "物流渠道", href: "/warehousing/logistics" },
  { label: "货运与特种物流", href: "/warehousing/freight" },
];



const navLinks = [
  { href: "/", label: "首页", dropdown: null },
  { href: "/solutions", label: "解决方案", dropdown: "solutions" as const },
  { href: "/warehousing", label: "仓储与派送", dropdown: "warehousing" as const },
  { href: "/industries", label: "行业", dropdown: null },
  { href: "/technology", label: "技术支持", dropdown: null },
  { href: "/about", label: "关于我们", dropdown: null },
  { href: "/contact", label: "联系我们", dropdown: null },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  function handleMouseEnter(key: string) {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(key);
  }

  function handleMouseLeave() {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }

  const isHomepage = pathname === "/";

  function getDropdownItems(key: string) {
    switch (key) {
      case "solutions": return solutionItems;
      case "warehousing": return warehouseItems;
      default: return [];
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="mr-2.5 flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-[10px] font-black tracking-tight text-primary-foreground">
              CUBE
            </span>
          </div>
          <span className="text-base font-bold text-foreground">
            Cube海外仓
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.dropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.dropdown!)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 h-20 text-[15px] font-normal transition-colors border-y-[4px] border-transparent ${
                      isActive
                        ? "!text-primary !font-semibold border-b-primary"
                        : "text-[#424444] hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>

                  {activeDropdown === link.dropdown && (
                    <div
                      className="absolute left-1/2 top-20 min-w-[220px] animate-dropdown-in"
                      onMouseEnter={() => handleMouseEnter(link.dropdown!)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="mt-1 rounded-lg bg-card py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-border/50">
                        {getDropdownItems(link.dropdown).map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2.5 text-sm text-[#424444] transition-all duration-200 hover:bg-primary/[0.06] hover:text-primary hover:pl-6"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 h-20 flex items-center text-[15px] font-normal transition-colors border-y-[4px] border-transparent ${
                  isActive
                    ? "!text-primary !font-semibold border-b-primary"
                    : "text-[#424444] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* WeChat QR codes - directly displayed */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="text-right mr-1">
            <p className="text-xs font-medium text-foreground">微信咨询</p>
            <p className="text-[10px] text-muted-foreground">悬停放大扫码</p>
          </div>
          <div className="group/qr text-center z-20 hover:z-[100]">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 origin-top group-hover/qr:scale-[2.8] group-hover/qr:translate-y-[40px] group-hover/qr:shadow-xl group-hover/qr:border-primary">
              <Image src="/images/qr-1.png" alt="技术支持" width={48} height={48} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="group/qr text-center z-10 hover:z-[100]">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 origin-top group-hover/qr:scale-[2.8] group-hover/qr:translate-y-[40px] group-hover/qr:shadow-xl group-hover/qr:border-primary">
              <Image src="/images/qr-china.png" alt="销售专员（中国办）" width={48} height={48} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="ml-auto rounded-md p-2 transition-colors lg:hidden text-foreground hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-card lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-3 mb-2 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                    {getDropdownItems(link.dropdown).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 border-t border-border pt-3 px-3">
              <p className="text-sm text-muted-foreground mb-3">扫码添加微信咨询</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/images/qr-1.png" alt="技术支持" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">技术支持</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/images/qr-china.png" alt="销售专员（中国办）" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">销售专员</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
