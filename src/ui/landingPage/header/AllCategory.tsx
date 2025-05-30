
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SubMenuItem from "@/ui/landingPage/header/TopSubMenu"; 
import { categories } from "@/data/data"; 

const AllCategory = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            All Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* ul এর প্রস্থ কন্টেন্টের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সেট হবে */}
            <ul className="grid grid-cols-1 gap-1 p-2 w-max">
              {categories.map((category) => (
                <SubMenuItem
                  key={category.href}
                  title={category.title} // ListItem এ title prop পাস করা হয়েছে
                  href={category.href}
                  // subcategories অ্যারে থাকলে ListItem এ পাস করা হয়েছে
                  subcategories={category.subcategories && category.subcategories.length > 0 ? category.subcategories : undefined}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AllCategory;