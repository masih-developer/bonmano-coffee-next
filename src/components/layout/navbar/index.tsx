"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import NavbarMobile from "./NavbarMobile";
import Search from "./search";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scroll down hide the navbar
        setIsVisible(false);
      } else {
        // If scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <nav
      className={`bg-background sticky z-10 shadow-md w-full top-0 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container">
        <div className="flex items-center pt-5 size-full justify-between lg:grid lg:grid-cols-12">
          <div className="lg:col-span-1 2xl:col-span-2">
            <div className="flex text-center items-center gap-5">
              <div className="block lg:hidden">
                <NavbarMobile />
              </div>
              <div className="hidden sm:block">
                <Search />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 h-full">
            <ul className="hidden lg:flex gap-5 shrink-0 justify-end size-full items-end">
              <li className="relative pb-9 group">
                <Link
                  href="/"
                  className="text-sm transition-colors group-hover:text-primary flex items-center gap-1"
                >
                  <span>محصولات خانگی</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="absolute top-full right-0 w-64 bg-[#faf3ea] p-5 rounded-bl-2xl rounded-br-2xl opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible"></ul>
              </li>
              <li className="relative pb-9 group">
                <Link
                  href="/"
                  className="text-sm transition-colors group-hover:text-primary flex items-center gap-1"
                >
                  <span>محصولات هورکا</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="absolute top-full right-0 w-64 bg-[#faf3ea] p-5 rounded-bl-2xl rounded-br-2xl opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible"></ul>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
            <div className="size-20 shrink-0 md:size-24 overflow-hidden flex items-center justify-between flex-col mx-10 relative after:content-[''] after:absolute after:bottom-0 after:h-[3px] after:w-44 after:bg-primary after:rounded-tl-lg after:rounded-tr-lg">
              <Image
                fill
                src="/logo.svg"
                alt="app header logo"
                title="بَُن مانو"
                className="pb-5 block size-full"
                priority={true}
              />
            </div>
          </div>
          <div className="lg:col-span-4 2xl:col-span-3 h-full">
            <ul className="hidden lg:flex gap-5 shrink-0 size-full items-end">
              <li className="relative pb-9 group">
                <Link
                  href="/"
                  className="text-sm transition-colors group-hover:text-primary flex items-center gap-1"
                >
                  <span>مجله بن مانو</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="absolute top-full right-0 w-64 bg-[#faf3ea] p-5 rounded-bl-2xl rounded-br-2xl opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible"></ul>
              </li>
              <li className="relative group pb-9">
                <Link
                  href="/"
                  className="text-sm transition-colors group-hover:text-primary flex items-center gap-1"
                >
                  درباره ما
                </Link>
              </li>
              <li className="relative group pb-9">
                <Link
                  href="/"
                  className="text-sm transition-colors group-hover:text-primary flex items-center gap-1"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center justify-end text-center gap-5">
              <div className="block sm:hidden">
                <Search />
              </div>
              <Link
                href="/profile"
                className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors hidden sm:flex"
              >
                <span className="flex items-center justify-center size-7 rounded-full bg-secondary">
                  <CiUser className="text-xl" />
                </span>
              </Link>
              <Link
                href="/cart"
                className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors hidden sm:flex relative after:absolute after:content-[attr(data-count)] after:-top-2 after:-right-2 after:text-background after:bg-primary after:text-[10px] after:flex after:items-center after:justify-center after:rounded-full after:h-5 after:min-w-5 after:p-1"
                data-count={1}
              >
                <span className="flex items-center justify-center size-7 rounded-full bg-secondary">
                  <CiShoppingCart className="text-xl" />
                </span>
              </Link>
              <Link
                href="/wishlist"
                className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors hidden sm:flex"
              >
                <span className="flex items-center justify-center size-7 rounded-full bg-secondary">
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
