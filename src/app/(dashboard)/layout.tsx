import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-primary-light1">
      {children}
      <Toaster />
    </body>
  );
}
