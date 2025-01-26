import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#313865]/95 w-full p-4 text-white">
      <div className="container mx-auto text-lg">
        <div className="flex justify-between items-center">
          <ul>
            <li className="text-4xl">Logo</li>
          </ul>
          <ul className="block lg:hidden">
            <li>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <MenuIcon className="text-[#313865]" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#313865] border-none text-white outline-none">
                  <ul className="flex flex-col justify-center space-y-6 text-lg  mt-14">
                    <li>หน้าแรก</li>
                    <li>เกี่ยวกับ</li>
                    <li>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-none">
                          <AccordionTrigger className="p-0">
                            บริการ
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col gap-4 text-sm pl-2 mt-4">
                              <li>ให้คำปรึกษา - ประเมินหน้างานฟรี</li>
                              <li>งานเล็ก - งานใหญ่ รับจบในที่เดียว</li>
                              <li>บริการสุภาพ ราคากันเอง</li>
                              <li>รถสิบล้อ 12,000 ลิตร - รถกะบะ 2,000 ลิตร</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>แกลอรี่</li>
                    <li>ติดต่อเรา</li>
                  </ul>
                </SheetContent>
              </Sheet>
            </li>
          </ul>
          <ul className=" hidden lg:flex space-x-16">
            <li>หน้าแรก</li>
            <li>เกี่ยวกับ</li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-lg text-white p-0 h-auto hover:!bg-transparent hover:!text-white focus:text-white focus:!bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent [&_svg]:size-4">
                      บริการ
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <ul className="px-2 py-3 md:w-[300px]  ">
                        <ListItem
                          href="/"
                          title="ให้คำปรึกษา - ประเมินหน้างานฟรี"
                        />
                        <ListItem
                          href="/"
                          title="งานเล็ก - งานใหญ่ รับจบในที่เดียว"
                        />
                        <ListItem href="/" title="บริการสุภาพ ราคากันเอง" />
                        <ListItem
                          href="/"
                          title="รถสิบล้อ 12,000 ลิตร - รถกะบะ 2,000 ลิตร"
                        />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>แกลอรี่</li>
            <li>ติดต่อเรา</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
