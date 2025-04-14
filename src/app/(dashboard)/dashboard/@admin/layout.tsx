import SideBar from "./_components/SideBar";
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
        <button className="" type="button"></button>
        <TopBar />
        {children}
      </div>
    </main>
  );
}
