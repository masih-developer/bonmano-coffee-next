import Navbar from "@/components/layout/navbar";
import MobileBottomNav from "@/components/layout/navbar/MobileBottomNav";
import { Toaster } from "react-hot-toast";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Navbar />
      <MobileBottomNav />
      {children}
      <Toaster />
    </body>
  );
}
