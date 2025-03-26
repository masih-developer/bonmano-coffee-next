"use client";

import Noresca from "@/assets/icons/Noresca";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi2";

import menuData from "./menuData.json";
import NavbarMobile from "./NavbarMobile";
import Search from "./search";
import useNavbar from "./useNavbar";

const Navbar = () => {
  const { isVisible } = useNavbar();

  return (
    <nav
      className={`bg-background sticky top-0 z-10 w-full shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0 transform" : "-translate-y-full transform"
      }`}
    >
      <div className="container">
        <div className="flex size-full items-center justify-between pt-5 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-1 2xl:col-span-2">
            <div className="flex items-center gap-5 text-center">
              <div className="block lg:hidden">
                <NavbarMobile />
              </div>
              <div className="hidden sm:block">
                <Search />
              </div>
            </div>
          </div>
          <div className="h-full lg:col-span-3">
            <ul className="hidden size-full shrink-0 items-end justify-end gap-5 lg:flex">
              <li className="group relative pb-9">
                <Link
                  className="group-hover:text-primary flex items-center gap-1 text-sm transition-colors"
                  href="/"
                >
                  <span>محصولات خانگی</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="bg-secondary text-background invisible absolute top-full right-0 flex w-64 flex-col rounded-br-2xl rounded-bl-2xl p-5 text-sm font-light opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
                  {menuData[0].sublinks.map(({ id, title }) => (
                    <li
                      className="first:[&>a]:pt-0 last:[&>a]:border-b-0"
                      key={id}
                    >
                      <Link
                        className="border-b-secondary-light flex items-center gap-x-2 border-b py-4"
                        href="/"
                      >
                        <Noresca />
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="group relative pb-9">
                <Link
                  className="group-hover:text-primary flex items-center gap-1 text-sm transition-colors"
                  href="/"
                >
                  <span>محصولات هورکا</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="bg-secondary invisible absolute top-full right-0 w-64 rounded-br-2xl rounded-bl-2xl p-5 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"></ul>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
            <div className="after:bg-primary relative mx-10 flex size-20 shrink-0 flex-col items-center justify-between overflow-hidden after:absolute after:bottom-0 after:h-[3px] after:w-44 after:rounded-tl-lg after:rounded-tr-lg after:content-[''] md:size-24">
              <Image
                fill
                alt="app header logo"
                className="block size-full pb-5"
                src="/logo.svg"
                title="بَُن مانو"
                priority
              />
            </div>
          </div>
          <div className="h-full lg:col-span-4 2xl:col-span-3">
            <ul className="hidden size-full shrink-0 items-end gap-5 lg:flex">
              <li className="group relative pb-9">
                <Link
                  className="group-hover:text-primary flex items-center gap-1 text-sm transition-colors"
                  href="/"
                >
                  <span>مجله بن مانو</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="bg-secondary invisible absolute top-full right-0 w-64 rounded-br-2xl rounded-bl-2xl p-5 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"></ul>
              </li>
              <li className="group relative pb-9">
                <Link
                  className="group-hover:text-primary flex items-center gap-1 text-sm transition-colors"
                  href="/"
                >
                  درباره ما
                </Link>
              </li>
              <li className="group relative pb-9">
                <Link
                  className="group-hover:text-primary flex items-center gap-1 text-sm transition-colors"
                  href="/"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center justify-end gap-5 text-center">
              <div className="block sm:hidden">
                <Search />
              </div>
              <Link
                className="hover:border-primary hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors sm:flex"
                href="/profile"
              >
                <span className="bg-secondary flex size-7 items-center justify-center rounded-full">
                  <CiUser className="text-xl" />
                </span>
              </Link>
              <Link
                className="after:bg-primary after:text-background hover:border-primary relative hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors after:absolute after:-top-2 after:-right-2 after:flex after:h-5 after:min-w-5 after:items-center after:justify-center after:rounded-full after:p-1 after:text-[10px] after:content-[attr(data-count)] sm:flex"
                href="/cart"
                data-count={1}
              >
                <span className="bg-secondary flex size-7 items-center justify-center rounded-full">
                  <CiShoppingCart className="text-xl" />
                </span>
              </Link>
              <Link
                className="hover:border-primary hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors sm:flex"
                href="/wishlist"
              >
                <span className="bg-secondary flex size-7 items-center justify-center rounded-full">
                  <CiHeart className="text-xl" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
