import { DialogTitle } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

import ResultSection from "./ResultSection";

export default function Search() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="hover:border-primary rounded-full border-2 border-neutral-500 p-[2px] transition-colors">
          <span className="bg-secondary flex size-6 items-center justify-center rounded-full text-xl">
            <CiSearch />
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="block size-full rounded-none border-none bg-transparent backdrop-blur-md"
        overalyClassName="bg-transparent"
      >
        <DialogTitle />
        <DrawerHeader className="relative flex items-center justify-center p-5">
          <DrawerClose asChild>
            <button className="hover:border-primary absolute top-2 left-2 z-10 rounded-full border-2 border-neutral-500 p-[2px] transition-colors">
              <span className="bg-secondary flex size-7 items-center justify-center rounded-full">
                <HiXMark className="text-xl" />
              </span>
            </button>
          </DrawerClose>
        </DrawerHeader>
        <div className="container">
          <div className="mt-5 mb-10">
            <div className="border-border bg-background focus-within:border-primary flex h-12 items-center overflow-hidden rounded-xl border shadow-md transition-colors">
              <span className="flex size-12 shrink-0 items-center justify-center text-2xl text-neutral-300">
                <CiSearch />
              </span>
              <input
                className="size-full outline-hidden placeholder:font-light"
                type="text"
                placeholder="دنبال چی میگردی؟"
              />
            </div>
          </div>
          <ScrollArea dir="rtl" className="h-[calc(100vh-148px)]">
            <div className="grid grid-cols-12 gap-y-10 pl-5 lg:gap-10">
              <div className="col-span-12 lg:col-span-6">
                <ResultSection type="products" products={[]} />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <ResultSection type="blogs" blogs={[]} />
              </div>
            </div>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
