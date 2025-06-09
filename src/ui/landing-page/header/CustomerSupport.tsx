import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const CustomerSupport = () => {
  return (
    <Button variant={'ghost'}>
      <Link href='/profile/customer-support' className="inline-flex items-center gap-1 text-secondary-foreground text-sm">
        <TfiHeadphoneAlt />
        <span>Customer Support</span>
      </Link>
    </Button>
  );
};

export default CustomerSupport;