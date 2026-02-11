import React from "react"
import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "MSL UK - 英国电商仓储与第三方物流服务",
  description:
    "MSL UK 提供专业的电商仓储、第三方物流(3PL)、拣货包装、运输配送等一站式服务，助力在线零售商高效增长。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
