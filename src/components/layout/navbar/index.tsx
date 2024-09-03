"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (document.body) {
      document.body.style.overflowY = open ? "hidden" : "unset";
    }
  }, [open]);

  return (
    <>
      <nav
        className={`bg-background z-10 shadow-md px-1 fixed w-full top-0 transition-transform h-16 duration-300 ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between h-full">
          <button
            className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="text-xl flex items-center justify-center size-6 rounded-full bg-secondary">
              <HiBars3BottomRight />
            </span>
          </button>
          <div className="h-full w-28 flex items-center justify-between flex-col">
            <Image
              width={64}
              height={64}
              src="/logo.svg"
              alt="app header logo"
              title="بَُن مانو"
              className="mt-2"
              priority={true}
            />
            <span className="h-[3px] w-full bg-primary rounded-tl-lg rounded-tr-lg"></span>
          </div>
          <button className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors">
            <span className="text-xl flex items-center justify-center size-6 rounded-full bg-secondary">
              <CiSearch />
            </span>
          </button>
        </div>
      </nav>
      <NavbarMobile open={open} setOpen={setOpen} />
      <div
        className={`fixed bg-black/50 inset-0 z-20 duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
