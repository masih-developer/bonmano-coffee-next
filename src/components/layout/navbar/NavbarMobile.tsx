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
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight, HiChevronDown, HiXMark } from "react-icons/hi2";

type NavLinkType =
  | { id: number; title: string; isLink: true; path: string }
  | { id: number; title: string; isLink: false; items: NavLinkType[] };

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
        <button className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors">
          <span className="text-xl flex items-center justify-center size-6 rounded-full bg-secondary">
            <HiBars3BottomRight />
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="w-80 max-w-full rounded-tl-2xl p-5 rounded-bl-2xl bg-background gap-y-10 h-full rounded-tr-none rounded-br-none block"
      >
        <DialogTitle />
        <DrawerHeader className="flex items-center justify-center relative">
          <DrawerClose asChild>
            <button className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors absolute left-0 top-0">
              <span className="flex items-center justify-center size-5 rounded-full bg-secondary">
                <HiXMark />
              </span>
            </button>
          </DrawerClose>
          <Image
            width={125}
            height={125}
            src="/logo.svg"
            alt="sidebar app logo"
            priority={true}
          />
        </DrawerHeader>
        <div className="overflow-y-auto overflow-x-hidden hide-scrollbar">
          <Accordion>
            {NAV_LINKS.map((item) =>
              item.isLink ? (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-sm font-light bg-neutral-100 py-4 w-full text-start flex items-center justify-between rounded-xl overflow-hidden px-2"
                >
                  {item.title}
                </Link>
              ) : (
                <AccordionItem
                  key={item.id}
                  header={({ state: { isEnter } }) => {
                    return (
                      <>
                        <span
                          className={`transition-colors font-light text-sm truncate ${
                            isEnter ? "text-primary" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`transition-transform shrink-0 mr-2 ${
                            isEnter ? "rotate-180 text-primary" : "rotate-0"
                          }`}
                        >
                          <HiChevronDown />
                        </span>
                      </>
                    );
                  }}
                  contentProps={{ className: "transition-height" }}
                >
                  <Accordion className="space-y-0">
                    {item.items.map((each) =>
                      each.isLink ? (
                        <Link
                          key={each.id}
                          href={each.path}
                          className="text-sm font-light bg-neutral-100 py-3 w-full text-start flex items-center justify-between rounded-xl overflow-hidden px-2"
                        >
                          {each.title}
                        </Link>
                      ) : (
                        <AccordionItem
                          key={each.id}
                          header={({ state: { isEnter } }) => {
                            return (
                              <>
                                <span
                                  className={`transition-colors font-light text-sm truncate ${
                                    isEnter ? "text-primary" : ""
                                  }`}
                                >
                                  {each.title}
                                </span>
                                <span
                                  className={`transition-transform shrink-0 mr-2 ${
                                    isEnter
                                      ? "rotate-180 text-primary"
                                      : "rotate-0"
                                  }`}
                                >
                                  <HiChevronDown />
                                </span>
                              </>
                            );
                          }}
                          contentProps={{ className: "transition-height" }}
                          className="py-1"
                        >
                          <div className="py-2">
                            <ul className="flex flex-col gap-y-3 pr-2 border-r-2 border-r-primary">
                              {each.items.map((child) =>
                                child.isLink ? (
                                  <li
                                    key={child.id}
                                    className="[&>a]:first:pt-0 [&>a]:last:pb-0"
                                  >
                                    <Link
                                      href={child.path}
                                      className="text-sm font-light w-full text-start block transition-all hover:text-primary hover:pr-5 relative before:content-[''] before:absolute before:right-0 before:w-0 before:h-[2px] before:rounded-full before:bg-primary before:top-0 before:bottom-0 hover:before:w-4 before:m-auto before:transition-all"
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ) : (
                                  ""
                                )
                              )}
                            </ul>
                          </div>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarMobile;
