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
        <button className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors">
          <span className="text-xl flex items-center justify-center size-6 rounded-full bg-secondary">
            <CiSearch />
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="size-full bg-transparent rounded-none block backdrop-blur-md border-none"
        overalyClassName="bg-transparent"
      >
        <DialogTitle />
        <DrawerHeader className="flex items-center p-5 justify-center relative">
          <DrawerClose asChild>
            <button className="border-2 border-neutral-500 rounded-full p-[2px] hover:border-primary transition-colors absolute left-2 top-2 z-10">
              <span className="flex items-center justify-center size-7 rounded-full bg-secondary">
                <HiXMark className="text-xl" />
              </span>
            </button>
          </DrawerClose>
        </DrawerHeader>
        <div className="container">
          <div className="mt-5">
            <Input
              className="text-base h-12 shadow-md"
              placeholder="دنبال چی میگردی؟"
            />
          </div>
          <ScrollArea dir="rtl" className="h-[calc(100vh-108px)]">
            <div className="mt-10 pl-5 gap-y-10 grid grid-cols-12 lg:gap-10">
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
