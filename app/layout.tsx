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
  title: "MSL UK - 英国电商仓储与第三方物流服务 | 专业3PL物流合作伙伴",
  description:
    "MSL UK 提供专业的电商仓储、第三方物流(3PL)、拣货包装、运输配送等一站式服务，助力在线零售商高效增长。服务覆盖Amazon、eBay、Shopify等主流平台。",
  keywords:
    "电商仓储,3PL,第三方物流,英国物流,仓储服务,Amazon FBA,电商履约,国际货运",
};

export const viewport: Viewport = {
  themeColor: "#1a3464",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
