'use client'

import MyShopLogos from "@/ui/landing-page/header/MyShopLogos";
import Searchbar from "@/ui/landing-page/header/Searchbar";
import UsersActions from "@/ui/landing-page/header/UsersActions";


const TopUsersActions = () => {

  return (
    <section className="bg-[#1b6392] py-2 md:py-3 lg:py-4"> 
      <div className="container">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0">
            <MyShopLogos />
          </div>

          <div className="flex-grow max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
            <Searchbar />
          </div>
          <div className="flex-shrink-0 flex items-center">
            <UsersActions />
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;