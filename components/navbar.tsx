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
  const [wechatModalOpen, setWechatModalOpen] = useState(false);
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

        {/* WeChat Contact Button */}
        <button
          onClick={() => setWechatModalOpen(true)}
          className="hidden lg:flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
            <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
            <circle cx="14.392" cy="14.551" r="1" fill="white"/>
            <circle cx="19.608" cy="14.551" r="1" fill="white"/>
            <circle cx="5.565" cy="8.5" r="1" fill="white"/>
            <circle cx="10.782" cy="8.5" r="1" fill="white"/>
          </svg>
          <span className="text-xs text-muted-foreground">联系我们</span>
        </button>

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
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
                  <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
                  <circle cx="14.392" cy="14.551" r="1" fill="white"/>
                  <circle cx="19.608" cy="14.551" r="1" fill="white"/>
                  <circle cx="5.565" cy="8.5" r="1" fill="white"/>
                  <circle cx="10.782" cy="8.5" r="1" fill="white"/>
                </svg>
                扫码添加销售微信
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/images/qr-2.png" alt="销售咨询" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">销售咨询</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/images/qr-china.png" alt="销售专员（中国办）" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">销售专员（中国办）</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* WeChat QR Code Modal */}
      {wechatModalOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 animate-fade-in"
          onClick={() => setWechatModalOpen(false)}
        >
          <div 
            className="bg-card rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">微信联系我们</h3>
              <button
                onClick={() => setWechatModalOpen(false)}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <p className="text-muted-foreground text-sm mb-6 text-center">扫描下方二维码添加微信，获取专业咨询服务</p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                  <Image src="/images/qr-2.png" alt="销售咨询" width={128} height={128} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-medium text-foreground mt-3">销售咨询</p>
                <p className="text-xs text-muted-foreground">英国总部</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                  <Image src="/images/qr-china.png" alt="销售专员（中国办）" width={128} height={128} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-medium text-foreground mt-3">销售专员</p>
                <p className="text-xs text-muted-foreground">中国办事处</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
