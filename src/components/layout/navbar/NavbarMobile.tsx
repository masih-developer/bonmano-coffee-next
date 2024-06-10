"use client";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Image from "next/image";
import { HiChevronDown, HiXMark } from "react-icons/hi2";

interface NavbarMobileProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobile = ({ open, setOpen }: NavbarMobileProps) => {
  return (
    <div
      className={`fixed z-30 w-80 max-w-full rounded-tl-2xl p-5 rounded-bl-2xl top-0 bottom-0 duration-300 bg-background flex flex-col gap-y-5 ${
        open ? "right-0" : "-right-80"
      }`}
    >
      <div className="flex items-center justify-center relative">
        <button
          className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors absolute left-0 top-0"
          onClick={() => setOpen(false)}
        >
          <span className="flex items-center justify-center size-5 rounded-full bg-secondary">
            <HiXMark />
          </span>
        </button>
        <Image
          width={125}
          height={125}
          src="Group-1501.svg"
          alt="sidebar app logo"
        />
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <Accordion transition transitionTimeout={250} className="space-y-4">
          <AccordionItem
            header={({ state: { isEnter } }) => {
              return (
                <>
                  <span
                    className={`transition-colors font-light text-sm ${
                      isEnter ? "text-primary" : ""
                    }`}
                  >
                    محصولات خانگی
                  </span>
                  <span
                    className={`transition-transform ${
                      isEnter ? "rotate-180 text-primary" : "rotate-0"
                    }`}
                  >
                    <HiChevronDown />
                  </span>
                </>
              );
            }}
            buttonProps={{
              className:
                "bg-neutral-100 py-2 w-full text-start flex items-center justify-between",
            }}
            className="bg-neutral-100 rounded-xl overflow-hidden p-2"
            contentProps={{ className: "transition-height" }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AccordionItem>
          <AccordionItem
            header={({ state: { isEnter } }) => {
              return (
                <>
                  <span
                    className={`transition-colors font-light text-sm ${
                      isEnter ? "text-primary" : ""
                    }`}
                  >
                    محصولات هورکا
                  </span>
                  <span
                    className={`transition-transform ${
                      isEnter ? "rotate-180 text-primary" : "rotate-0"
                    }`}
                  >
                    <HiChevronDown />
                  </span>
                </>
              );
            }}
            buttonProps={{
              className:
                "bg-neutral-100 py-2 w-full text-start flex items-center justify-between",
            }}
            className="bg-neutral-100 rounded-xl overflow-hidden p-2"
            contentProps={{ className: "transition-height" }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AccordionItem>
          <AccordionItem
            header={({ state: { isEnter } }) => {
              return (
                <>
                  <span
                    className={`transition-colors font-light text-sm ${
                      isEnter ? "text-primary" : ""
                    }`}
                  >
                    مجله بن مانو
                  </span>
                  <span
                    className={`transition-transform ${
                      isEnter ? "rotate-180 text-primary" : "rotate-0"
                    }`}
                  >
                    <HiChevronDown />
                  </span>
                </>
              );
            }}
            buttonProps={{
              className:
                "bg-neutral-100 py-2 w-full text-start flex items-center justify-between",
            }}
            className="bg-neutral-100 rounded-xl overflow-hidden p-2"
            contentProps={{ className: "transition-height" }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default NavbarMobile;
