"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Warehouse, Ship, Plane, Package } from "lucide-react";

const serviceItems = [
  {
    icon: Warehouse,
    title: "英国海外仓",
    subtitle: "本土化仓储服务",
    href: "/services/uk-warehouse",
    features: ["多区布点，辐射全英", "就近发货，时效提升", "智能系统，动态调配", "税务合规，风险规避"],
  },
  {
    icon: Package,
    title: "国际集运物流",
    subtitle: "资源整合中转",
    href: "/services/consolidation",
    features: ["全球揽收，统一归集", "智能分拨，精准归类", "拼箱拼单，均摊费用", "一单到底，透明可视"],
  },
  {
    icon: Ship,
    title: "国际海运",
    subtitle: "大宗运输主力",
    href: "/services/sea-freight",
    features: ["整柜拼箱，灵活适配", "低价承运，长期稳定", "全球港口，高频班次", "低碳减排，绿色运输"],
  },
  {
    icon: Plane,
    title: "国际空运",
    subtitle: "高效时效保障",
    href: "/services/air-freight",
    features: ["优先舱位，极速通关", "加急服务，按需调配", "温控防损，全链保险", "特殊货物，专项解决"],
  },
];

const aboutItems = [
  { label: "专业服务", href: "/about#services" },
  { label: "关于我们", href: "/about" },
  { label: "企业发展", href: "/about#timeline" },
  { label: "企业文化", href: "/about#culture" },
];

const navLinks = [
  { href: "/", label: "首页", dropdown: null },
  { href: "/services", label: "服务", dropdown: "services" as const },
  { href: "/integrations", label: "信息化", dropdown: null },
  { href: "/about", label: "关于", dropdown: "about" as const },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomepage
          ? "bg-card shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
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
          <span
            className={`text-base font-bold transition-colors ${
              scrolled || !isHomepage ? "text-foreground" : "text-white"
            }`}
          >
            Cube Fulfilment
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
                    className={`flex items-center gap-1 px-[14px] h-20 text-[15px] font-normal transition-colors border-y-[4px] border-transparent ${
                      isActive
                        ? "!text-primary !font-semibold border-b-primary"
                        : scrolled || !isHomepage
                          ? "text-[#424444] hover:text-primary"
                          : "text-white hover:text-white/80"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>

                  {/* Services mega dropdown */}
                  {link.dropdown === "services" && activeDropdown === "services" && (
                    <div
                      className="absolute left-1/2 top-20 -translate-x-1/2 w-[720px] animate-fade-in"
                      onMouseEnter={() => handleMouseEnter("services")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="mt-0 rounded-lg bg-card p-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                        <div className="grid grid-cols-2 gap-3">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex gap-3.5 rounded-lg p-3 transition-colors hover:bg-primary/[0.04]"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                                <item.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {item.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {item.subtitle}
                                  </span>
                                </div>
                                <div className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-0.5">
                                  {item.features.map((f) => (
                                    <span key={f} className="text-xs text-muted-foreground/70">
                                      {f}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* About dropdown */}
                  {link.dropdown === "about" && activeDropdown === "about" && (
                    <div
                      className="absolute left-1/2 top-20 -translate-x-1/2 w-48 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter("about")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="mt-0 rounded-lg bg-card py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                        {aboutItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-[#424444] transition-colors hover:bg-primary/[0.04] hover:text-primary"
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
                className={`px-[14px] h-20 flex items-center text-[15px] font-normal transition-colors border-y-[4px] border-transparent ${
                  isActive
                    ? "!text-primary !font-semibold border-b-primary"
                    : scrolled || !isHomepage
                      ? "text-[#424444] hover:text-primary"
                      : "text-white hover:text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone */}
        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href="tel:01616223633"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled || !isHomepage
                ? "text-[#424444] hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            0161 622 3633
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`ml-auto rounded-md p-2 transition-colors lg:hidden ${
            scrolled || !isHomepage
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            <Link
              href="/"
              className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                pathname === "/" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              首页
            </Link>

            {/* Mobile services */}
            <div className="px-3 py-2">
              <Link
                href="/services"
                className={`block text-sm font-medium ${
                  pathname.startsWith("/services") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                服务
              </Link>
              <div className="mt-1.5 ml-3 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/integrations"
              className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                pathname.startsWith("/integrations") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              信息化
            </Link>

            {/* Mobile about */}
            <div className="px-3 py-2">
              <Link
                href="/about"
                className={`block text-sm font-medium ${
                  pathname.startsWith("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                关于
              </Link>
              <div className="mt-1.5 ml-3 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

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
