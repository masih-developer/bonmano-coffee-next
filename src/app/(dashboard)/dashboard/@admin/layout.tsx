import SideBar from "./_components/SideBar";
import TopBar from "./_components/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-3">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        {children}
      </div>
    </main>
  );
}
