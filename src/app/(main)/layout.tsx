import Navbar from "@/components/layout/navbar";
import MobileBottomNav from "@/components/layout/navbar/MobileBottomNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <MobileBottomNav />
      {children}
    </>
  );
}
