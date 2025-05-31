"use client";

import HomeIcon from "@/assets/icons/websima/home.svg";
import LogOutIcon from "@/assets/icons/websima/logout.svg";
import MenuIcon from "@/assets/icons/websima/menu.svg";
import { DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_LINKS } from "./links";

function SidebarMobile() {
  const pathname = usePathname();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="mb-5 lg:hidden" type="button">
          <MenuIcon className="fill-primary size-7" />
        </button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-primary text-primary-foreground !w-64 !border-0"
      >
        <DialogTitle>
          <Link
            className="mb-3 flex h-28 justify-center px-2 transition-all duration-300 ease-linear"
            href="/"
          >
            <Image
              height={140}
              width={140}
              alt="logo"
              className="block w-36 max-w-full"
              src="/panel-logo.svg"
            />
          </Link>
        </DialogTitle>
        <ScrollArea dir="rtl" className="h-[calc(100vh-277px)]">
          <ul className="flex flex-col gap-y-2 px-2">
            {SIDEBAR_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn(
                    `hover:bg-secondary-shade text-background flex w-full justify-start gap-x-3 rounded-2xl p-3 transition-all duration-300 ease-linear`,
                    pathname === link.href ? "bg-secondary-shade" : "",
                  )}
                >
                  <span className="flex shrink-0 items-center justify-center">
                    {link.icon}
                  </span>
                  <span
                    className={cn(
                      `visible w-full opacity-100 transition-all duration-300 ease-linear`,
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
                    "hover:bg-secondary-shade group text-background flex w-full justify-start gap-x-3 rounded-2xl p-3 transition-all duration-300 ease-linear",
                    pathname === link.href ? "bg-secondary-shade" : "",
                  )}
                >
                  <span className="flex shrink-0 items-center justify-center">
                    {link.icon}
                  </span>
                  <span
                    className={cn(
                      "visible w-full opacity-100 transition-all duration-300 ease-linear",
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
      </DrawerContent>
    </Drawer>
  );
}
export default SidebarMobile;
