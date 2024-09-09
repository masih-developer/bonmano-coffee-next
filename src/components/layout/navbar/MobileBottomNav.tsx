import Link from "next/link";
import {
  CiBoxList,
  CiHeart,
  CiHome,
  CiLogin,
  CiShoppingCart,
} from "react-icons/ci";

export default function MobileBottomNav() {
  return (
    <div className="fixed left-0 right-0 bottom-0 w-full bg-neutral-300 h-14 block sm:hidden">
      <div className="size-full relative p-5 flex items-center justify-between">
        <ul className="flex items-center gap-2.5 justify-between pl-7 basis-1/2">
          <li>
            <Link
              href="/wishlist"
              className="text-background transition-colors hover:text-secondary flex items-center justify-center flex-col whitespace-nowrap"
            >
              <CiHeart className="text-2xl" />
              <span className="text-xs">علاقه مندی</span>
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-background transition-colors hover:text-secondary flex items-center justify-center flex-col whitespace-nowrap"
            >
              <CiBoxList className="text-2xl" />
              <span className="text-xs">دسته بندی ها</span>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-2.5 justify-between pr-7 basis-1/2">
          <li>
            <Link
              href="/auth/login"
              className="text-background transition-colors hover:text-secondary flex items-center justify-center flex-col whitespace-nowrap"
            >
              <CiLogin className="text-2xl" />
              <span className="text-xs">ورود | ثبت نام</span>
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="text-background transition-colors hover:text-secondary flex items-center justify-center flex-col whitespace-nowrap"
            >
              <CiShoppingCart className="text-2xl" />
              <span className="text-xs">سبد خرید</span>
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className="flex items-center justify-center absolute border-4 border-background -top-7 size-14 bg-primary text-white text-3xl rounded-full left-1/2 -translate-x-1/2"
        >
          <CiHome />
        </Link>
      </div>
    </div>
  );
}
