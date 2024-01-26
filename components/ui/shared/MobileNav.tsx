import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { HiOutlineMenuAlt3 } from "react-icons/hi"; 
import { Separator } from "../separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden ">
        <Sheet >
  <SheetTrigger><HiOutlineMenuAlt3 size={24} className="mt-1" /></SheetTrigger>
  <SheetContent className="bg-white flex flex-col gap-6 md:hidden">
       <h1>lOgo</h1>
       <Separator />
       <NavItems/>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav