import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink, // এটি এখন সরাসরি কাস্টমাইজড
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle, // এটি শুধু ট্রিগারের জন্য
} from "@/components/ui/navigation-menu"
import Link from "next/link";


/*
//TODO:
1. The component is renderd into 'TopMenu.tsx' file.
2. On hover "All Category" will show a dropdown menu with link to different categories. Type of product's category is the name of the category. Like: Electronics, Clothing & Apparel, Home Appliances, Books & Media, Keyboard, Mouse.
3. On Clikcing on a Category link or item it will redirect to the respective category page.
4. Categorie items may have subcategories. 
5. The Sub Categories will be show in the dropdown menu when hovering over the main category.
6. The sub categories will be shown in a nested list format. Brand name of the category is the name of the subcategory. Like: samsung, Huawi, etc.
7. On Clikcing on a sub menu link or item it will redirect to the respective barnd's page. The brand page will show the products of that brand. And products must be filtered by category(keyboard, mouse, etc) and subcategory(brand name).

*/

const AllCategory = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>

          <NavigationMenuTrigger>
            All Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 gap-1 p-2 w-max">
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/electronics'>
                    <span>Electronics</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/clothing'>
                    <span>Clothing & Apparel</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/home-appliances'>
                    <span>Home Appliances</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/books'>
                    <span>Books & Media</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/keyboard'>
                    <span>Keyboard</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href='/category/mouse'>
                    <span>Mouse</span>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AllCategory;