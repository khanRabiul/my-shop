import { Headphones } from "lucide-react";
import Link from "next/link";

const CustomerSupport = () => {
  return (
    <>
    
    <Link
    className="flex items-center gap-0.5 text-sm font-medium text-font-gray" 
    href='/profile/compare'
    >
      <Headphones className="size-5" />
      <span className="ml-2">Customer Support</span>
    </Link>
  
    </>
  );
};

export default CustomerSupport;