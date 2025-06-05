// src/ui/landing-page/header/TopUsersActions.tsx
import MyShopLogos from "@/ui/landing-page/header/MyShopLogos";
import Searchbar from "@/ui/landing-page/header/Searchbar";
import UsersActions from "@/ui/landing-page/header/UsersActions";

const TopUsersActions = () => {
  return (
    <section className="bg-[#1b6392] py-2"> {/* bg-primary থিম-ভিত্তিক রঙ */}
      <div className="container">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* লোগো সেকশন */}
          <div className="flex-shrink-0">
            <MyShopLogos />
          </div>

          {/* সার্চবার সেকশন - এটিই সার্চবারের আকার নিয়ন্ত্রণ করবে */}
          <div className="flex-grow max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"> {/* flex-grow এবং max-w এখানে থাকবে */}
            <Searchbar />
          </div>

          {/* ইউজার অ্যাকশন সেকশন */}
          <div className="flex-shrink-0">
            <UsersActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;