"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import NavbarMobile from "./NavbarMobile";
import Search from "./Search";

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
        <div className="flex items-center size-full justify-between">
          <NavbarMobile />
          <div className="size-20  md:size-24 overflow-hidden flex items-center justify-between flex-col relative after:content-[''] after:absolute after:bottom-0 after:h-[3px] after:w-44 after:bg-primary after:rounded-tl-lg after:rounded-tr-lg">
            <Image
              fill
              src="/logo.svg"
              alt="app header logo"
              title="بَُن مانو"
              className="py-2 block size-full"
              priority={true}
            />
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
