import { MapPin } from "lucide-react";
import Link from "next/link";

const TrackOrder = () => {
  return (
    <Link
    className="flex items-center gap-0.5 text-sm font-medium text-font-gray" 
    href='/profile/track-order'
    >
      <MapPin className="size-5" />
      <span className="ml-2">Track Order</span>
    </Link>
  );
};

export default TrackOrder;