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
    <div className="fixed bottom-0 left-0 right-0 block h-14 w-full bg-neutral-300 sm:hidden">
      <div className="relative flex size-full items-center justify-between p-5">
        <ul className="flex basis-1/2 items-center justify-between gap-2.5 pl-7">
          <li>
            <Link
              className="flex flex-col items-center justify-center whitespace-nowrap text-background transition-colors hover:text-secondary"
              href="/wishlist"
            >
              <CiHeart className="text-2xl" />
              <span className="text-xs">علاقه مندی</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center justify-center whitespace-nowrap text-background transition-colors hover:text-secondary"
              href="/shop"
            >
              <CiBoxList className="text-2xl" />
              <span className="text-xs">دسته بندی ها</span>
            </Link>
          </li>
        </ul>
        <ul className="flex basis-1/2 items-center justify-between gap-2.5 pr-7">
          <li>
            <Link
              className="flex flex-col items-center justify-center whitespace-nowrap text-background transition-colors hover:text-secondary"
              href="/auth/login"
            >
              <CiLogin className="text-2xl" />
              <span className="text-xs">ورود | ثبت نام</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center justify-center whitespace-nowrap text-background transition-colors hover:text-secondary"
              href="/cart"
            >
              <CiShoppingCart className="text-2xl" />
              <span className="text-xs">سبد خرید</span>
            </Link>
          </li>
        </ul>
        <Link
          className="absolute -top-7 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-3xl text-white"
          href="/"
        >
          <CiHome />
        </Link>
      </div>
    </div>
  );
}
