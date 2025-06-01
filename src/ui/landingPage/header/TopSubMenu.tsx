'use client'

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface SubMenuItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  title: string;
  subcategories?: {
    title: string;
    href: string;
  }[];
}

const SubMenuItem = React.forwardRef<React.ElementRef<typeof Link>, SubMenuItemProps>(({ className, title, href, subcategories, ...props }, ref) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <li
      className="relative" 
      onMouseEnter={() => subcategories && setIsSubMenuOpen(true)}
      onMouseLeave={() => subcategories && setIsSubMenuOpen(false)} 
    >
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "flex w-full items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-nowrap",
            subcategories && "justify-between", 
            className
          )}
          {...props}
        >
          <span>{title}</span> 
          {subcategories && subcategories.length > 0 && (
            <ChevronRight className="ml-2 h-4 w-4 transition-transform" />
          )}
        </Link>
      </NavigationMenuLink>

      {subcategories && subcategories.length > 0 && isSubMenuOpen && (
        <ul className="absolute left-full top-0 ml-5 min-w-[200px] bg-background text-foreground shadow-lg rounded-md p-2 z-10 border border-gray-200">
          {subcategories.map((subItem) => (
            <li key={subItem.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={subItem.href}
                  className="flex w-full items-center px-4 py-2 text-sm font-medium rounded-md transition-colors bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-nowrap"
                >
                  <span>{subItem.title}</span>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
})


export default SubMenuItem;