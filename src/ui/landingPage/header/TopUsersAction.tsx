'use client'

import { BsShop } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import { Heart, Moon, Search, ShoppingCart, Sun, UserRound } from 'lucide-react';
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";


const TopUsersActions = () => {

  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }
  return (
    <section className="bg-[#1B6392] py-1 md:py-2 lg:py-3">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href='/'
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold uppercase text-white"
            >
              <span>
                <BsShop />
              </span>
              <span className="">My Shop</span>
            </Link>
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

          <div className="inline-flex items-center gap-4 md:gap-5 lg:gap-6 text-white flex-shrink-0">
            <Link
              href='/cart'
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
            >
              <ShoppingCart size='icon' />
            </Link>
            <Link
              href='/wishlist'
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
            >
              <Heart size='icon' />
            </Link>
            <Link
              href='/profile'
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
            >
              <UserRound size='icon' />
            </Link>

            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className="relative text-white hover:bg-white/20"
            >
              <Sun
                className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" />
              <Moon
                className="size-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" />
              <span className="sr-only">change theme</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;

