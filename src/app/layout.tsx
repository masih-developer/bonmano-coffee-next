import type { Metadata } from "next";

import AuthProvider from "@/contexts/AuthProvider";

import "./globals.css";
import { DanaFont } from "./fonts";

export const metadata: Metadata = {
  title:
    "خرید اینترنتی قهوه تازه با بهترین کیفیت و قیمت، فروش آنلاین قهوه بنمانو",
  description:
    "فروش اینترنتی انواع قهوه و پودر نوشیدنی، دانه قهوه تازه‌رست، پودر قهوه آسیاشده ترک، فرانسه، اسپرسو، قهوه‌ فوری و کپسول اسپرسو با بهترین قیمت و کیفیت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html dir="rtl" lang="fa" className={DanaFont.className}>
        {children}
      </html>
    </AuthProvider>
  );
}
