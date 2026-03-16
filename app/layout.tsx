import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cube Cang - 英国本地仓储与履约解决方案",
  description:
    "Cube Cang 为跨境品牌、平台卖家、分销客户及项目型业务提供覆盖英国本地的仓储、订单履约、配送、退货与增值服务支持。TEMU官方认证仓，FBA备货与转运，D2C一件代发，B2B零售分销。",
  keywords:
    "英国仓储,3PL,第三方物流,TEMU官方认证仓,FBA备货,D2C代发,B2B分销,英国履约,Cube Cang",
};

export const viewport: Viewport = {
  themeColor: "#FF4400",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
