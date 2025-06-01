
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import SubMenuItem from "@/ui/landingPage/header/TopSubMenu"; 
// import { categories } from "@/data/data"; 

// const AllCategory = () => {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>
//             All Category
//           </NavigationMenuTrigger>
//           <NavigationMenuContent>
//             {/* ul এর প্রস্থ কন্টেন্টের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সেট হবে */}
//             <ul className="grid grid-cols-1 gap-1 p-2 w-max">
//               {categories.map((category) => (
//                 <SubMenuItem
//                   key={category.href}
//                   title={category.title} // ListItem এ title prop পাস করা হয়েছে
//                   href={category.href}
//                   // subcategories অ্যারে থাকলে ListItem এ পাস করা হয়েছে
//                   subcategories={category.subcategories && category.subcategories.length > 0 ? category.subcategories : undefined}
//                 />
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };

// export default AllCategory;




// src/ui/landingPage/header/AllCategory.tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SubMenuItem from "@/ui/landingPage/header/TopSubMenu"; // আপনার SubMenuItem ইম্পোর্ট করুন
import { categories } from "@/data/data"; // ক্যাটাগরি ডেটা ইম্পোর্ট করুন
import Link from "next/link"; // Link ইম্পোর্ট করুন
import { cn } from "@/lib/utils"; // cn ইম্পোর্ট করুন
import { ChevronRight } from "lucide-react";

interface AllCategoryProps {
  inHamburgerMenu?: boolean; // হ্যামবার্গার মেনুতে আছে কিনা তা নির্দেশ করে
}

const AllCategory = ({ inHamburgerMenu = false }: AllCategoryProps) => {
  if (inHamburgerMenu) {
    // হ্যামবার্গার মেনুর ভেতরে থাকলে ড্রপডাউন ছাড়া শুধু লিংক লিস্ট দেখাবে
    return (
      <ul className="flex flex-col gap-2"> {/* কলামে থাকবে */}
        {categories.map((category) => (
          <li key={category.href} className="w-full">
            <Link
              href={category.href}
              className={cn(
                "flex w-full items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground text-nowrap",
                // সাব-ক্যাটাগরি থাকলে বা না থাকলে একই স্টাইল, ড্রপডাউন হবে না
                category.subcategories && category.subcategories.length > 0 && "justify-between" // যদি সাব-ক্যাটাগরি থাকে, তাহলে টেক্সট এবং আইকনকে স্পেস-বিটুইন করবে
              )}
            >
              <span>{category.title}</span>
              {category.subcategories && category.subcategories.length > 0 && (
                <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" /> // আইকন
              )}
            </Link>
            {/* সাব-ক্যাটাগরিগুলো এখানে সরাসরি নেস্টেড লিস্ট হিসেবে দেখাতে পারেন, যদি প্রয়োজন হয় */}
            {/* যেমন: যদি আপনি সরাসরি নেস্টেড লিস্ট চান, তাহলে এখানে অন্য একটি ul লুপ করতে পারেন */}
            {category.subcategories && category.subcategories.length > 0 && (
              <ul className="pl-4 pt-2 flex flex-col gap-1">
                {category.subcategories.map(subItem => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className="flex w-full items-center px-3 py-1 text-sm font-normal rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground text-nowrap"
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // ডেস্কটপ মেনুর জন্য, আগের NavigationMenu ব্যবহার করুন
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              All Category
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 gap-1 p-2 w-max">
                {categories.map((category) => (
                  <SubMenuItem
                    key={category.href}
                    title={category.title}
                    href={category.href}
                    subcategories={category.subcategories && category.subcategories.length > 0 ? category.subcategories : undefined}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AllCategory;