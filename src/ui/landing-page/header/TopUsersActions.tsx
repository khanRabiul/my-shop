import MyShopLogos from "@/ui/landing-page/header/MyShopLogos";
import Searchbar from "@/ui/landing-page/header/Searchbar";

const TopUsersActions = () => {
  return (
    <section className="bg-[#1B6392] py-1">
      <div className="container">
        <div>
          <div>
            <MyShopLogos />
          </div>
          <div>
            <Searchbar />
          </div>
          <div> {/* Users actions */}</div>
        </div>
      </div>
    </section>
  );
};

export default TopUsersActions;