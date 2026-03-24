import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#051851] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-black text-white">CUBE</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Cube海外仓</div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-primary">
                  Cube Distribution Service Ltd
                </div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              英国本地仓储与履约解决方案，助力品牌高效进入英国市场。
            </p>
            
            {/* UK Office */}
            <div className="mb-4">
              <h5 className="text-xs font-semibold text-primary mb-2">英国总部</h5>
              <div className="space-y-1.5 text-sm text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span className="text-xs">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
                </div>
                <a href="tel:+441615662392" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  <span className="text-xs">+44 161 566 2392 / 7599588577</span>
                </a>
                <a href="mailto:contact@thecubedistribution.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                  <span className="text-xs">contact@thecubedistribution.com</span>
                </a>
              </div>
            </div>

            {/* China Office */}
            <div>
              <h5 className="text-xs font-semibold text-primary mb-2">中国办事处</h5>
              <div className="space-y-1.5 text-sm text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span className="text-xs">广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5" />
                  <span className="text-xs">联系人：张小姐</span>
                </div>
                <a href="tel:18033414492" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  <span className="text-xs">18033414492（微信同号）</span>
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary">解决方案</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/solutions/temu" className="hover:text-primary transition-colors">TEMU 官方认证仓</Link></li>
              <li><Link href="/solutions/fba" className="hover:text-primary transition-colors">FBA 备货与转运</Link></li>
              <li><Link href="/solutions/d2c" className="hover:text-primary transition-colors">D2C 一件代发</Link></li>
              <li><Link href="/solutions/b2b" className="hover:text-primary transition-colors">B2B 零售分销</Link></li>
              <li><Link href="/solutions/returns" className="hover:text-primary transition-colors">售后退货</Link></li>
              <li><Link href="/solutions/value-added" className="hover:text-primary transition-colors">增值服务</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary">快速导航</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">首页</Link></li>
              <li><Link href="/warehousing" className="hover:text-primary transition-colors">仓储与派送</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">行业解决方案</Link></li>
              <li><Link href="/technology" className="hover:text-primary transition-colors">技术支持</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* WeChat QR Codes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
                <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
                <circle cx="14.392" cy="14.551" r="1" fill="white"/>
                <circle cx="19.608" cy="14.551" r="1" fill="white"/>
                <circle cx="5.565" cy="8.5" r="1" fill="white"/>
                <circle cx="10.782" cy="8.5" r="1" fill="white"/>
              </svg>
              微信联系
            </h4>
            
            {/* Sales Department */}
            <p className="text-xs text-white/40 mb-2">销售部</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="group relative text-center z-20 hover:z-[100]">
                <div className="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-primary">
                  <Image src="/images/qr-2.png" alt="销售咨询" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">销售咨询</span>
              </div>
              <div className="group relative text-center z-10 hover:z-[100]">
                <div className="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-primary">
                  <Image src="/images/qr-china.png" alt="销售专员（中国办）" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">中国办</span>
              </div>
            </div>
            
            {/* Technical Support */}
            <p className="text-xs text-white/40 mb-2">技术支持部</p>
            <div className="flex flex-wrap gap-3">
              <div className="group relative text-center z-0 hover:z-[100]">
                <div className="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-primary">
                  <Image src="/images/qr-1.png" alt="技术支持" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">技术支持</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/60">鼠标悬停放大二维码</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Cube Distribution Service Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
