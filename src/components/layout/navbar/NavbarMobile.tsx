"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight, HiChevronDown, HiXMark } from "react-icons/hi2";

type NavLinkType =
  | { id: number; title: string; isLink: false; items: NavLinkType[] }
  | { id: number; title: string; isLink: true; path: string };

const NAV_LINKS: NavLinkType[] = [
  {
    id: 1,
    title: "محصولات خانگی",
    isLink: false,
    items: [
      { id: 1, title: "نورسکا", isLink: true, path: "/" },
      { id: 2, title: "کپسول اسپرسو", isLink: true, path: "/" },
      {
        id: 3,
        title: "اسپرسو",
        isLink: false,
        items: [
          { id: 1, title: "دانه اسپرسو", isLink: true, path: "/" },
          { id: 2, title: "پودر اسپرسو", isLink: true, path: "/" },
        ],
      },
      { id: 4, title: "قهوه ترک", isLink: true, path: "/" },
      { id: 5, title: "قهوه فرانسه", isLink: true, path: "/" },
      {
        id: 6,
        title: "قهوه فوری",
        isLink: false,
        items: [
          { id: 1, title: "کافی میکس", isLink: true, path: "/" },
          { id: 2, title: "کاپوچینو", isLink: true, path: "/" },
          { id: 3, title: "قهوه گلد گرمی", isLink: true, path: "/" },
          { id: 4, title: "قهوه گلد برزیل ساشه ای", isLink: true, path: "/" },
          { id: 5, title: "کریمر", isLink: true, path: "/" },
        ],
      },
      {
        id: 7,
        title: "پودر های ترکیبی",
        isLink: false,
        items: [
          { id: 1, title: "چای لاته کاراملی", isLink: true, path: "/" },
          { id: 2, title: "چای ماسالا", isLink: true, path: "/" },
          { id: 3, title: "شکلات داغ", isLink: true, path: "/" },
        ],
      },
      {
        id: 8,
        title: "شکر قهوه ای",
        isLink: false,
        items: [
          { id: 1, title: "شکر قهوه ای گرمی", isLink: true, path: "/" },
          { id: 2, title: "شکر قهوه ای ساشه", isLink: true, path: "/" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "محصولات هورکا",
    isLink: false,
    items: [
      { id: 1, title: "تخصصی", isLink: true, path: "/" },
      { id: 2, title: "تک خاستگاه", isLink: true, path: "/" },
      { id: 3, title: "ترکیبی", isLink: true, path: "/" },
    ],
  },
  {
    id: 3,
    title: "مجله بُن مانو",
    isLink: false,
    items: [
      { id: 1, title: "دانشنامه", isLink: true, path: "/" },
      { id: 2, title: "سلامتی", isLink: true, path: "/" },
      { id: 3, title: "روش های دم آوری قهوه", isLink: true, path: "/" },
      { id: 4, title: "طرز تهیه نوشیدنی", isLink: true, path: "/" },
      { id: 5, title: "دستور پخت کیک و دسر", isLink: true, path: "/" },
      { id: 6, title: "لوازم و تجهیزات قهوه", isLink: true, path: "/" },
      { id: 7, title: "برشته کاری قهوه", isLink: true, path: "/" },
      { id: 8, title: "اخبار بُن مانو", isLink: true, path: "/" },
    ],
  },
  { id: 4, title: "درباره ما", isLink: true, path: "/" },
  { id: 5, title: "تماس با ما", isLink: true, path: "/" },
];

const NavbarMobile = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          className="hover:border-primary rounded-full border-2 border-neutral-500 p-[2px] transition-colors"
          type="button"
        >
          <span className="bg-secondary flex size-6 items-center justify-center rounded-full text-xl">
            <HiBars3BottomRight />
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-background block h-full w-80 max-w-full gap-y-10 rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl"
      >
        <DialogTitle />
        <DrawerHeader className="relative flex items-center justify-center p-5">
          <DrawerClose asChild>
            <button
              className="hover:border-primary absolute top-5 left-5 z-10 rounded-full border-2 border-neutral-500 p-[2px] transition-colors"
              type="button"
            >
              <span className="bg-secondary flex size-5 items-center justify-center rounded-full">
                <HiXMark />
              </span>
            </button>
          </DrawerClose>
          <div className="relative size-32 overflow-hidden">
            <Image
              fill
              alt="sidebar app logo"
              className="block size-full"
              src="/logo.svg"
              priority
            />
          </div>
        </DrawerHeader>
        <ScrollArea dir="rtl" className="h-[calc(100vh-180px)]">
          <div className="px-5">
            <Accordion>
              {NAV_LINKS.map((item) =>
                item.isLink ? (
                  <Link
                    className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-neutral-100 px-2 py-4 text-start text-sm font-light"
                    href={item.path}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <AccordionItem
                    key={item.id}
                    contentProps={{ className: "transition-height" }}
                    header={({ state: { isEnter } }) => {
                      return (
                        <>
                          <span
                            className={`truncate text-sm font-light transition-colors ${
                              isEnter ? "text-primary" : ""
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`mr-2 shrink-0 transition-transform ${
                              isEnter ? "text-primary rotate-180" : "rotate-0"
                            }`}
                          >
                            <HiChevronDown />
                          </span>
                        </>
                      );
                    }}
                  >
                    <Accordion className="space-y-0">
                      {item.items.map((each) =>
                        each.isLink ? (
                          <Link
                            className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-neutral-100 px-2 py-3 text-start text-sm font-light"
                            href={each.path}
                            key={each.id}
                          >
                            {each.title}
                          </Link>
                        ) : (
                          <AccordionItem
                            className="py-1"
                            key={each.id}
                            contentProps={{ className: "transition-height" }}
                            header={({ state: { isEnter } }) => {
                              return (
                                <>
                                  <span
                                    className={`truncate text-sm font-light transition-colors ${
                                      isEnter ? "text-primary" : ""
                                    }`}
                                  >
                                    {each.title}
                                  </span>
                                  <span
                                    className={`mr-2 shrink-0 transition-transform ${
                                      isEnter
                                        ? "text-primary rotate-180"
                                        : "rotate-0"
                                    }`}
                                  >
                                    <HiChevronDown />
                                  </span>
                                </>
                              );
                            }}
                          >
                            <div className="py-2">
                              <ul className="border-r-primary flex flex-col gap-y-3 border-r-2 pr-2">
                                {each.items.map((child) =>
                                  child.isLink ? (
                                    <li
                                      className="first:[&>a]:pt-0 last:[&>a]:pb-0"
                                      key={child.id}
                                    >
                                      <Link
                                        className="before:bg-primary hover:text-primary relative block w-full text-start text-sm font-light transition-all before:absolute before:top-0 before:right-0 before:bottom-0 before:m-auto before:h-[2px] before:w-0 before:rounded-full before:transition-all before:content-[''] hover:pr-5 hover:before:w-4"
                                        href={child.path}
                                      >
                                        {child.title}
                                      </Link>
                                    </li>
                                  ) : (
                                    ""
                                  ),
                                )}
                              </ul>
                            </div>
                          </AccordionItem>
                        ),
                      )}
                    </Accordion>
                  </AccordionItem>
                ),
              )}
            </Accordion>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarMobile;
