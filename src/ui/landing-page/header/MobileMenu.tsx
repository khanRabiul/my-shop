'use client';

import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AlignJustify, ChevronRight, ChevronDown } from 'lucide-react';
import MyShopLogos from './MyShopLogos';
import UsersActions from './UsersActions';
import Link from 'next/link';
import { categories } from '@/data/data';
import { cn } from '@/lib/utils';
import SocialMediaLink from './SocialMediaLink';

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary-foreground">
          <AlignJustify className="size-6" />
          <span className="sr-only">mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80vw] sm:w-[350px] overflow-y-auto bg-background text-foreground pl-4">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle>
            <MyShopLogos className="text-foreground " />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 mb-2">Menu</h3>
            <ul className="flex flex-col gap-1">
              {categories.map((category, idx) => (
                <li key={category.href} className="w-full">
                  <div className="flex items-center">
                    <Link
                      href={category.href}
                      className={cn(
                        "flex-1 flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground text-nowrap",
                        category.subcategories && category.subcategories.length > 0 && "justify-between"
                      )}
                    >
                      <span>{category.title}</span>
                    </Link>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <button
                        type="button"
                        aria-label="Toggle submenu"
                        className="ml-2 p-1"
                        onClick={() => handleToggle(idx)}
                      >
                        {openIndex === idx ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                  {category.subcategories && category.subcategories.length > 0 && openIndex === idx && (
                    <ul className="pl-8 pt-2 flex flex-col gap-1">
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
          </div>

          <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border">


          </div>
        </div>
      <SheetFooter>
        <div className="flex justify-center">
          <SocialMediaLink className="text-foreground" />
        </div>
      </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;