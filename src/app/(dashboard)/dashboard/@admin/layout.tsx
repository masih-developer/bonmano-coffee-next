import SideBar from "./_components/sidebar/desktop";
import SidebarMobile from "./_components/sidebar/mobile";
import TopBar from "./_components/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex-1 p-5">
        <SidebarMobile />
        <TopBar />
        {children}
      </div>
    </main>
  );
}
