"use client";

import ArrowRightIcon from "@/assets/icons/websima/caret-right.svg";
import HomeIcon from "@/assets/icons/websima/home.svg";
import LogOutIcon from "@/assets/icons/websima/logout.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SIDEBAR_LINKS } from "./links";

export default function SideBar() {
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside
      className={`bg-primary text-primary-foreground hidden h-screen flex-col rounded-tl-2xl rounded-bl-2xl transition-[width] duration-300 ease-linear lg:flex ${
        isMinimized ? "w-[71px]" : "w-60"
      }`}
    >
      <Link
        href="/"
        className={cn(
          "flex justify-center px-2 transition-all duration-300 ease-linear",
          isMinimized ? "mb-0 h-24" : "mb-3 h-28",
        )}
      >
        <Image
          height={140}
          width={140}
          alt="logo"
          className="block w-36 max-w-full"
          src="/panel-logo.svg"
        />
      </Link>
      <ScrollArea
        dir="rtl"
        className={
          isMinimized ? "h-[calc(100vh-233.11px)]" : "h-[calc(100vh-276px)]"
        }
      >
        <ul className="flex flex-col gap-y-2 px-2">
          {SIDEBAR_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  `hover:bg-secondary-shade text-background flex rounded-2xl p-3 transition-all duration-300 ease-linear`,
                  pathname === link.href ? "bg-secondary-shade" : "",
                  isMinimized
                    ? "w-[55px] justify-center gap-x-0"
                    : "w-full justify-start gap-x-3",
                )}
              >
                <span className="flex shrink-0 items-center justify-center">
                  {link.icon}
                </span>
                <span
                  className={cn(
                    `transition-all duration-300 ease-linear`,
                    isMinimized
                      ? "invisible w-0 opacity-0"
                      : "visible w-full opacity-100",
                  )}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <div className="relative mt-auto px-2 pt-10 pb-2">
        <button
          className="bg-background absolute top-0 -left-5 flex h-10 w-10 items-center justify-center rounded-full shadow-lg"
          type="button"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <ArrowRightIcon className="fill-foreground h-6 w-6" />
        </button>
        <ul className="flex flex-col gap-y-2">
          {[
            {
              id: 1,
              href: "/",
              icon: <HomeIcon className="fill-background size-6" />,
              label: "خانه",
            },
            {
              id: 2,
              href: "/dashboard/logout",
              icon: (
                <LogOutIcon className="group-hover:fill-background size-6 fill-red-500 transition-all duration-300 ease-linear" />
              ),
              label: "خروج",
            },
          ].map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  `hover:bg-secondary-shade group text-background flex rounded-2xl p-3 transition-all duration-300 ease-linear`,
                  pathname === link.href ? "bg-secondary-shade" : "",
                  isMinimized
                    ? "w-[55px] justify-center gap-x-0"
                    : "w-full justify-start gap-x-3",
                )}
              >
                <span className="flex shrink-0 items-center justify-center">
                  {link.icon}
                </span>
                <span
                  className={cn(
                    `transition-all duration-300 ease-linear`,
                    isMinimized
                      ? "invisible w-0 opacity-0"
                      : "visible w-full opacity-100",
                    link.label === "خروج" &&
                      "hover:text-background text-red-500",
                  )}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
