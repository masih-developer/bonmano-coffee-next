import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-[#d9d9d954]">
      {children}
      <Toaster />
    </body>
  );
}
