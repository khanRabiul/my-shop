import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiLoopRightLine } from "react-icons/ri";

const Compare = () => {
  return (
<Button variant={'ghost'}>
      <Link href='/profile/compare' className="inline-flex items-center gap-1 text-secondary-foreground text-sm">
      <RiLoopRightLine />
      <span>Compare</span>
    </Link>
</Button>
  );
};

export default Compare;