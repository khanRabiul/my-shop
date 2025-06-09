import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdInformationCircleOutline } from "react-icons/io";

const NeedHelp = () => {
  return (
    <Button variant={'ghost'}>
      <Link href='/profile/help' className="inline-flex items-center gap-1 text-secondary-foreground text-sm">
        <IoMdInformationCircleOutline />
        <span>Need Help</span>
      </Link>
    </Button>
  );
};

export default NeedHelp;