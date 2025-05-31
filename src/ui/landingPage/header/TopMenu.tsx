import AllCategory from "@/ui/landingPage/header/AllCategory";
import TrackOrder from "@/ui/landingPage/header/TrackOrder";

const TopMenu = () => {
  return (
     <nav className="bg-background text-foreground py-2">
      <div className="container flex items-center space-x-4">
        <AllCategory />
        <TrackOrder />
      </div>
    </nav>
  );
};

export default TopMenu;