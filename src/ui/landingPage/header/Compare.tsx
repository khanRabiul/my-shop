import { RefreshCw } from "lucide-react";
import Link from "next/link";

const Compare = () => {
  return (
    <Link
    className="flex items-center gap-0.5 text-sm font-medium text-font-gray" 
    href='/profile/track-order'
    >
      <RefreshCw className="size-5" />
      <span className="ml-2">Track Order</span>
    </Link>
  );
};

export default Compare;