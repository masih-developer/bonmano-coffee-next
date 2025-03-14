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
        <button className="rounded-full border-2 border-neutral-500 p-[2px] transition-colors hover:border-primary">
          <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-xl">
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
            <button className="absolute left-2 top-2 z-10 rounded-full border-2 border-neutral-500 p-[2px] transition-colors hover:border-primary">
              <span className="flex size-7 items-center justify-center rounded-full bg-secondary">
                <HiXMark className="text-xl" />
              </span>
            </button>
          </DrawerClose>
        </DrawerHeader>
        <div className="container">
          <div className="mb-10 mt-5">
            <div className="flex h-12 items-center overflow-hidden rounded-xl border border-border bg-background shadow-md transition-colors focus-within:border-primary">
              <span className="flex size-12 shrink-0 items-center justify-center text-2xl text-neutral-300">
                <CiSearch />
              </span>
              <input
                type="text"
                className="size-full outline-none placeholder:font-light"
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
