'use client' 

import MyShopLogos from "@/ui/landing-page/header/MyShopLogos";
import Searchbar from "@/ui/landing-page/header/Searchbar";
import UsersActions from "@/ui/landing-page/header/UsersActions";
import MobileMenu from "@/ui/landing-page/header/MobileMenu"; 


const TopUsersActions = () => {
  return (
    <section className="bg-[#1b6392] py-2 md:py-3 lg:py-4">
      <div className="container">
        
        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between">

          <div className="w-full flex items-center justify-between lg:w-auto lg:flex-shrink-0">
            <MyShopLogos /> 

            <div className="flex items-center gap-4 lg:hidden">
              <UsersActions direction="row" hideThemeToggle={true} className="flex-grow justify-end text-primary-foreground" />
              <MobileMenu /> 
            </div>
          </div>

          <div className="flex items-center gap-2 bg-background border border-border px-3 py-0.5 rounded-md w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Searchbar /> 
          </div>

          <div className="hidden lg:block">
            <UsersActions direction="row" hideThemeToggle={false} className="text-primary-foreground" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;