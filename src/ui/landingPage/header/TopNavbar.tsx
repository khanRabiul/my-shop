import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <section className="hidden md:block bg-black md:py-1 lg:py-2">
      <div className="container">

        <div className="flex items-center justify-between">
          <div>
            <Button className="bg-[#F3DE6D] text-black rounded-none px-1 lg:px-2 py-1 -rotate-5 hover:bg-[#F3DE6D]/90 transition-colors duration-300">Black</Button>
            <span className="text-white ml-2.5 font-semibold md:text-md">Friday</span>
          </div>
          <div className="inline-flex items-center gap-2.5">
            <span className="text-white text-sm">Up to</span>
            <span className="text-yellow-500 font-semibold text-2xl">59%</span>
            <span className="text-white text-lg uppercase">off</span>
          </div>
          <div>
            <Link href='/shop' className="group">
              <Button
                className="bg-[#EBC80C] uppercase text-black rounded-sm md:px-1.5 lg:px-2 md:py-1 lg:py-1.5 hover:bg-[#EBC80C]/90 transition-colors duration-300 cursor-pointer"
              >
                Shop now
                <span className="text-black transition-transform duration-300 group-hover:translate-x-1 ml-2">
                  <MoveRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopNavbar; 