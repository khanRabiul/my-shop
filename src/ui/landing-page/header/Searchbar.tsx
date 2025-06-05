import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { cn } from "@/lib/utils";

const Searchbar = () => {
  return (
    <div className="flex items-center gap-2 bg-background border border-border px-3 py-0.5 rounded-md w-full">
      <Input
        placeholder="Search your broducts and brands..."
        className={cn(
          "w-full",
          "border-none bg-transparent",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
          "px-0 py-0",
          "text-foreground placeholder:text-muted-foreground"
        )}
      />
      <Search className="text-muted-foreground cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </div>
  );
};

export default Searchbar;