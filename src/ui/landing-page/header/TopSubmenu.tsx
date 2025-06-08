// src/ui/landing-page/header/TopSubMenu.tsx
'use client'; // এটি একটি ক্লায়েন্ট কম্পোনেন্ট, কারণ এটিতে useState এবং hooks ব্যবহার করা হবে।

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu"; // Shadcn/UI NavigationMenuLink
import { ChevronRight } from "lucide-react"; // ডান দিকের অ্যারো আইকনের জন্য

// ListItemProps টাইপ ডেফিনিশন
interface TopSubMenuProps extends React.ComponentPropsWithoutRef<typeof Link> {
  title: string;
  subcategories?: { title: string; href: string }[];
}

const TopSubMenu = React.forwardRef<
  React.ElementRef<typeof Link>,
  TopSubMenuProps
>(({ className, title, href, subcategories, ...props }, ref) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false); // সাব-মেনু খোলা আছে কিনা তা ট্র্যাক করে
  const hasSubcategories = subcategories && subcategories.length > 0;

  return (
    <li
      className="relative" // সাব-মেনুর পজিশনিংয়ের জন্য li কে relative করা হয়েছে
      // হোভারে সাব-মেনু খুলবে এবং মাউস সরিয়ে নিলে বন্ধ হবে
      onMouseEnter={() => hasSubcategories && setIsSubMenuOpen(true)}
      onMouseLeave={() => hasSubcategories && setIsSubMenuOpen(false)}
    >
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          // এখানে গুরুত্বপূর্ণ: cn() ব্যবহার করে default NavigationMenuLink স্টাইলকে ওভাররাইড করা হয়েছে
          // flex w-full items-center: আইটেমটি তার প্যারেন্ট li এর সম্পূর্ণ প্রস্থ নেবে এবং কন্টেন্টকে এক লাইনে সেন্টারে রাখবে
          // justify-start: টেক্সট বাম দিকে সারিবদ্ধ করবে
          // text-foreground: থিম-ভিত্তিক টেক্সট রঙ
          // hover:bg-accent hover:text-accent-foreground: থিম-ভিত্তিক হোভার স্টাইল
          // text-nowrap: টেক্সটকে এক লাইনে রাখবে
          className={cn(
            "flex w-full items-center px-4 py-2 text-sm font-medium rounded-md transition-colors text-nowrap",
            "text-foreground", // ডিফল্ট টেক্সট রঙ
            "hover:bg-accent hover:text-accent-foreground", // হোভার রঙ
            hasSubcategories && "justify-between", // সাব-ক্যাটাগরি থাকলে টেক্সট এবং আইকনকে দুপাশে ছড়ানো থাকবে
            className // বাইরে থেকে আসা যেকোনো কাস্টম ক্লাস এখানে মার্জ হবে
          )}
          {...props}
        >
          <span>{title}</span> {/* ক্যাটাগরির নাম */}
          {hasSubcategories && ( // যদি সাব-ক্যাটাগরি থাকে তাহলে অ্যারো দেখাবে
            <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" />
          )}
        </Link>
      </NavigationMenuLink>

      {/* সাব-মেনু কন্টেন্ট (শর্তসাপেক্ষ রেন্ডারিং) */}
      {hasSubcategories && isSubMenuOpen && (
        <ul
          // সাব-মেনু প্যানেলের স্টাইল:
          // absolute: প্যারেন্ট li এর উপর ভিত্তি করে পজিশন করবে
          // left-full: প্যারেন্ট li এর ডান পাশে অবস্থান করবে
          // ml-4: প্যারেন্ট li থেকে 16px মার্জিন-লেফট (ফাঁকা স্থান)
          // bg-card: থিম-ভিত্তিক ব্যাকগ্রাউন্ড রঙ
          // shadow-lg: শ্যাডো
          // rounded-md: গোলাকার কোণা
          // p-2: প্যাডিং
          // z-10: অন্যান্য উপাদানের উপরে থাকবে
          // border border-border: থিম-ভিত্তিক বর্ডার
          className="absolute left-full top-0 ml-4 min-w-[200px] bg-card shadow-lg rounded-md p-2 z-10 border border-border"
        >
          {subcategories.map((subItem) => (
            <li key={subItem.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={subItem.href}
                  className={cn(
                    "flex w-full items-center px-3 py-2 text-sm font-normal rounded-md transition-colors text-nowrap",
                    "text-foreground", // টেক্সট রঙ
                    "hover:bg-accent hover:text-accent-foreground" // হোভার রঙ
                  )}
                >
                  <span>{subItem.title}</span>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});

TopSubMenu.displayName = "TopSubMenu"; // displayName যোগ করা হয়েছে ডিবাগিং এর জন্য

export default TopSubMenu;