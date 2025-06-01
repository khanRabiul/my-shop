'use client'

import { Input } from "@/components/ui/input"
import { Heart, Menu, Moon, Search, ShoppingCart, Sun, UserRound } from 'lucide-react';
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./Logo";
import SocialMediaLink from "./SocialMediaLink";
import UsersActions from "./UsersActions";
import AllCategory from "./AllCategory";

const TopUsersActions = () => {


  return (
    <section className="bg-[#1B6392] py-1 md:py-2 lg:py-3">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Logo />
              </div>
              <div className="lg:hidden">
                <UsersActions />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-400 px-3 py-0.5 rounded-md w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Input
              placeholder="Search your products..."
              className="
                w-full
                border-none              
                bg-transparent           
                focus-visible:ring-0     
                focus-visible:ring-offset-0 
                focus-visible:outline-none 
                px-0 py-0               
                text-gray-800           
                placeholder:text-gray-500 
              "
            />
            <Search className="text-gray-400 cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </div>

          <div className="hidden lg:block">
            <UsersActions />
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className="ext-primary-foreground"
              >
                <Menu className="size-8" />
                <span className="sr-only">open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div>
                <AllCategory />
              </div>
              <SheetFooter>
                <SocialMediaLink />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;

