"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import NavbarMobile from "./NavbarMobile";
import Search from "./search";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";
import Noresca from "@/assets/icons/Noresca";
import EspressoCapsule from "@/assets/icons/EspressoCapsule";
import Espresso from "@/assets/icons/Espresso";
import TurkCoffee from "@/assets/icons/TurkCoffee";
import FrenchCoffee from "@/assets/icons/FrenchCoffee";
import InstantCoffee from "@/assets/icons/InstantCoffee";
import MixedPowders from "@/assets/icons/MixedPowders";

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
      className={`sticky top-0 z-10 w-full bg-background shadow-md transition-transform duration-300 ${
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
                  href="/"
                  className="flex items-center gap-1 text-sm transition-colors group-hover:text-primary"
                >
                  <span>محصولات خانگی</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="invisible absolute right-0 top-full flex w-64 flex-col rounded-bl-2xl rounded-br-2xl bg-secondary p-5 text-sm font-light text-background opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <Noresca />
                      <span>نورسکا</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <EspressoCapsule />
                      <span>کپسول اسپرسو</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <Espresso />
                      <span>اسپرسو</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <TurkCoffee />
                      <span>قهوه تُرک</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <FrenchCoffee />
                      <span>قهوه فرانسوی</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <InstantCoffee />
                      <span>قهوه فوری</span>
                    </Link>
                  </li>
                  <li className="[&>a]:first:pt-0 [&>a]:last:border-b-0">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 border-b border-b-secondary-light py-4"
                    >
                      <MixedPowders />
                      <span>پودر های ترکیبی</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative pb-9">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-sm transition-colors group-hover:text-primary"
                >
                  <span>محصولات هورکا</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="invisible absolute right-0 top-full w-64 rounded-bl-2xl rounded-br-2xl bg-secondary p-5 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"></ul>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
            <div className="relative mx-10 flex size-20 shrink-0 flex-col items-center justify-between overflow-hidden after:absolute after:bottom-0 after:h-[3px] after:w-44 after:rounded-tl-lg after:rounded-tr-lg after:bg-primary after:content-[''] md:size-24">
              <Image
                fill
                src="/logo.svg"
                alt="app header logo"
                title="بَُن مانو"
                className="block size-full pb-5"
                priority={true}
              />
            </div>
          </div>
          <div className="h-full lg:col-span-4 2xl:col-span-3">
            <ul className="hidden size-full shrink-0 items-end gap-5 lg:flex">
              <li className="group relative pb-9">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-sm transition-colors group-hover:text-primary"
                >
                  <span>مجله بن مانو</span>
                  <HiChevronDown className="transition group-hover:rotate-180" />
                </Link>
                <ul className="invisible absolute right-0 top-full w-64 rounded-bl-2xl rounded-br-2xl bg-secondary p-5 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"></ul>
              </li>
              <li className="group relative pb-9">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-sm transition-colors group-hover:text-primary"
                >
                  درباره ما
                </Link>
              </li>
              <li className="group relative pb-9">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-sm transition-colors group-hover:text-primary"
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
                href="/profile"
                className="hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors hover:border-primary sm:flex"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-secondary">
                  <CiUser className="text-xl" />
                </span>
              </Link>
              <Link
                href="/cart"
                className="relative hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors after:absolute after:-right-2 after:-top-2 after:flex after:h-5 after:min-w-5 after:items-center after:justify-center after:rounded-full after:bg-primary after:p-1 after:text-[10px] after:text-background after:content-[attr(data-count)] hover:border-primary sm:flex"
                data-count={1}
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-secondary">
                  <CiShoppingCart className="text-xl" />
                </span>
              </Link>
              <Link
                href="/wishlist"
                className="hidden rounded-full border-2 border-neutral-500 p-[2px] transition-colors hover:border-primary sm:flex"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-secondary">
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
