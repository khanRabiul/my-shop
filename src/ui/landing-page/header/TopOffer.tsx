import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TopOffer = () => {
  return (
    <section className="hidden md:block bg-secondary py-2 md:py-3 lg:py-4">
      <div className="container">
        <div className="flex items-center justify-between">

          <div>
            <Button className="bg-[#f3de6d] text-black rounded-none px-1 lg:px-2 py-1 -rotate-3 hover:bg-button-light-yellow/90 transition-colors duration-300 text-sm md:text-base">
              Black
            </Button>
            <span className="text-foreground ml-2.5 font-semibold text-base md:text-lg">Friday</span>
          </div>

          <div className="inline-flex items-center gap-1 md:gap-2">

            <span className="text-foreground text-xs md:text-sm">Up to</span>

            <span className="text-[#ebc80c] font-bold text-xl md:text-2xl">59%</span>
            <span className="text-foreground text-base md:text-lg uppercase">off</span>
          </div>

          <div>
            <Link href='/shop' className="group">
              <Button
                className="bg-[#ebc80c] uppercase text-black rounded-sm px-2 md:px-3 py-1 md:py-1.5 hover:bg-[#ebc80c]/90 transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                Shop now

                <span className="text-[#ebc80c]transition-transform duration-300 group-hover:translate-x-0.5 ml-1 md:ml-1.5">
                  <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopOffer;