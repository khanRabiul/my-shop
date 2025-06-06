'use client'

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <>
      <div className="flex-shrink-0">
        <Button
          variant='ghost'
          onClick={toggleTheme}
          className="ml-4 relative text-primary-foreground hover:bg-primary-foreground/20 flex items-center justify-center"
        >
          <Sun
            className="absolute inset-0 size-full rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            className="absolute inset-0 size-full rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary-foreground"
          />
          <span className="sr-only">change theme</span>
        </Button>
      </div>
    </>
  );
};

export default Theme;