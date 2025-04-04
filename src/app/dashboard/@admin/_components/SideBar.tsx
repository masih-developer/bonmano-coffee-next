import ArticleIcon from "@/assets/icons/websima/document.svg";
import GridIcon from "@/assets/icons/websima/grid.svg";
import HomeIcon from "@/assets/icons/websima/home.svg";
import LogOutIcon from "@/assets/icons/websima/logout.svg";
import OrdersIcon from "@/assets/icons/websima/menu.svg";
import SettingsIcon from "@/assets/icons/websima/settings.svg";
import ProductsIcon from "@/assets/icons/websima/shopping-bag.svg";
import UsersIcon from "@/assets/icons/websima/user.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="bg-primary text-primary-foreground flex h-screen w-60 flex-col rounded-tl-4xl rounded-bl-4xl">
      <div className="flex items-center justify-center p-5">
        <Image
          height={140}
          width={140}
          alt="logo"
          className="block max-w-full"
          src="/panel-logo.svg"
        />
      </div>
      <ul className="flex flex-col gap-y-2 px-2">
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard"
          >
            <GridIcon className="fill-background h-6 w-6" />
            <span className="">داشبورد</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard/users"
          >
            <UsersIcon className="fill-background h-6 w-6" />
            <span className="">کاربران</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard/products"
          >
            <ProductsIcon className="fill-background h-6 w-6" />
            <span className="">محصولات</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard/orders"
          >
            <OrdersIcon className="fill-background h-6 w-6" />
            <span className="">سفارشات</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard/orders"
          >
            <SettingsIcon className="fill-background h-6 w-6" />
            <span className="">تنظیمات</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard/orders"
          >
            <ArticleIcon className="fill-background h-6 w-6" />
            <span className="">مقالات</span>
          </Link>
        </li>
      </ul>
      <ul className="mt-auto mb-2 flex flex-col gap-y-2 px-2">
        <li>
          <Link
            className="hover:bg-secondary-shade text-background flex gap-x-2 rounded-2xl p-3 transition-colors"
            href="/dashboard"
          >
            <HomeIcon className="fill-background h-6 w-6" />
            <span className="">خانه</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-secondary-shade group hover:text-background flex gap-x-2 rounded-2xl p-3 text-red-500 transition-colors"
            href="/dashboard"
          >
            <LogOutIcon className="group-hover:fill-background h-6 w-6 fill-red-500 transition-colors" />
            <span className="">خروج</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
