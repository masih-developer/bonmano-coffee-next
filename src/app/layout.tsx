import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const myFont = localFont({
  src: "../assets/fonts/dana/Dana-Regular.ttf",
  variable: "--font-dana",
});

export const metadata: Metadata = {
  title: "Coffee Next App",
  description: "Created By @masih_developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
