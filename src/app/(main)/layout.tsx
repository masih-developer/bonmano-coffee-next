import Navbar from "@/components/layout/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
    </>
  );
}
