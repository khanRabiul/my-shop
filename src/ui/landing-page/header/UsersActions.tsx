import { Button } from "@/components/ui/button";
import { Heart, Moon, ShoppingCart, Sun, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const UsersActions = () => {

  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <div className="inline-flex items-center gap-4 md:gap-5 lg:gap-6 text-white flex-shrink-0">

        <Link
          href='/cart'
          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
        >
          <ShoppingCart size='icon' />
        </Link>
        <Link
          href='/wishlist'
          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
        >
          <Heart size='icon' />
        </Link>
        <Link
          href='/profile'
          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
        >
          <UserRound size='icon' />
        </Link>

        <Button
          variant='ghost'
          size='icon'
          onClick={toggleTheme}
          className="relative text-white hover:bg-white/20"
        >
          <Sun
            className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" />
          <Moon
            className="size-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" />
          <span className="sr-only">change theme</span>
        </Button>
      </div>

    </>
  );
};

export default UsersActions;


