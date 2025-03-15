import type { Metadata } from "next";

import AuthProvider from "@/contexts/AuthProvider";

import "./globals.css";

import localFont from "next/font/local";

const DanaFont = localFont({
  src: [
    {
      path: "../assets/fonts/dana/Dana-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/dana/Dana-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-dana",
});

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
    <html dir="rtl" lang="fa" className={DanaFont.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
