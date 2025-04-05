import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {children}
      <Toaster />
    </body>
  );
}
