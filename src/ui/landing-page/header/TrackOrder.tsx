import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

const TrackOrder = () => {
  return (
    <Button variant='ghost'>
      <Link href='/profile/track-order' className="inline-flex items-center gap-1 text-secondary-foreground text-sm">
        <IoLocationSharp />
        <span>Track Order</span>
      </Link>
    </Button>
  );
};

export default TrackOrder;