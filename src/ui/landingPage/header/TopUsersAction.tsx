// src/components/TopUsersActions.tsx
import { BsShop } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import Link from "next/link";

const TopUsersActions = () => {
  return (
    <section className="bg-[#1B6392] py-4 md:py-5 lg:py-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href='/'
              className="inline-flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-white"
            >
              <span>
                <BsShop />
              </span>
              <span className="">My Shop</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-400 px-3 py-2 rounded-md w-full max-w-sm md:max-w-md lg:max-w-lg">
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
            <Search className="text-gray-400 cursor-pointer w-5 h-5 md:w-6 md:h-6" />
          </div>

          <div className="inline-flex items-center gap-4 md:gap-5 lg:gap-6 text-white flex-shrink-0">
            <Link
              href='/cart'
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
            >
              <ShoppingCart className="w-full h-full" />
            </Link>
            <Link
              href='/wishlist'
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
            >
              <Heart className="w-full h-full" />
            </Link>
            <Link
              href='/profile'
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
            >
              <UserRound className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;