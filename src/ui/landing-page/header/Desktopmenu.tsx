import AllCategory from "@/ui/landing-page/header/AllCategory";
import TrackOrder from "@/ui/landing-page/header/TrackOrder";
import Compare from "@/ui/landing-page/header/Compare";
import CustomerSupport from "@/ui/landing-page/header/CustomerSupport";
import NeedHelp from "@/ui/landing-page/header/NeedHelp";


const Desktopmenu = () => {
  return (
    <section className="py-4 shadow-sm ">
      <div className="container">
        <div className="hidden lg:flex itmes-center gap-8">
        <AllCategory />
        <TrackOrder />
        <Compare />
        <CustomerSupport />
        <NeedHelp />
        </div>
      </div>
    </section>
  );
};

export default Desktopmenu;