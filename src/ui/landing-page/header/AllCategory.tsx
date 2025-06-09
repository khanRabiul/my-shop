'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import TopSubMenu from "@/ui/landing-page/header/TopSubmenu";
import { categories } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";



interface AllCategoryProps {
  inHamburgerMenu?: boolean;
  className?: string;
}

const AllCategory = ({ inHamburgerMenu = false, className }: AllCategoryProps) => {

  if (inHamburgerMenu) {
    return (
      <ul className={cn("flex flex-col gap-2", className)}>
        {categories.map((category) => (
          <li key={category.href} className="w-full">
            <Link
              href={category.href}
              className={cn(
                "flex w-full justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground text-nowrap",
                category.subcategories && category.subcategories.length > 0 && "justify-between"
              )}
            >
              <div>
                <span className="">{category.title}</span>
              </div>
              <div>
                {category.subcategories && category.subcategories.length > 0 && (
                  <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </Link>
            {category.subcategories && category.subcategories.length > 0 && (
              <ul className="pl-4 pt-2 flex flex-col gap-1">
                {category.subcategories.map(subItem => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className="flex w-full items-center px-3 py-1 text-sm font-normal rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground text-nowrap"
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Button variant={'ghost'}>
      <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn("text-primary-foreground", className)}>
              All Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 gap-1 p-2 w-max">
                {categories.map((category) => (
                  <TopSubMenu
                    key={category.href}
                    title={category.title}
                    href={category.href}
                    subcategories={category.subcategories && category.subcategories.length > 0 ? category.subcategories : undefined}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    </Button>
    
  );
};

export default AllCategory;