import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="bg-primary text-primary-foreground my-3 mr-3 min-h-[calc(100vh-1.5rem)] w-64 rounded-2xl">
      <ul className="flex flex-col gap-4 p-4">
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin"
          >
            داشبورد
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/users"
          >
            کاربران
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/products"
          >
            محصولات
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/categories"
          >
            دسته‌بندی‌ها
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/orders"
          >
            سفارشات
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/order-items"
          >
            آیتم‌های سفارش
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/addresses"
          >
            آدرس‌ها
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/comments"
          >
            کامنت‌ها
          </Link>
        </li>
        <li className="bg-primary-foreground text-foreground rounded-xl">
          <Link
            className="hover:text-primary block p-2 transition-colors"
            href="/dashboard/admin/settings"
          >
            تنظیمات
          </Link>
        </li>
        <li className="bg-primary-foreground rounded-xl text-red-500">
          <Link className="block p-2" href="/dashboard/admin/logout">
            خروج
          </Link>
        </li>
      </ul>
    </aside>
  );
}
