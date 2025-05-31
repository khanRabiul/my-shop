import AllCategory from "@/ui/landingPage/header/AllCategory";
import TrackOrder from "@/ui/landingPage/header/TrackOrder";
import Compare from "@/ui/landingPage/header/Compare";
import CustomerSupport from "@/ui/landingPage/header/CustomerSupport";
import Help from "@/ui/landingPage/header/Help";
import ContactNubmer from "@/ui/landingPage/header/ContactNumber";


const TopMenu = () => {
  return (
    <nav className="bg-background text-foreground py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <AllCategory />
          <TrackOrder />
          <Compare />
          <CustomerSupport />
          <Help />
        </div>
        <div>
          <ContactNubmer />

        </div>
      </div>
    </nav>
  );
};

export default TopMenu;