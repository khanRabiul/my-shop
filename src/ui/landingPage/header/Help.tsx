import { Info } from "lucide-react";
import Link from "next/link";

const Help = () => {
  return (
    <>
      <Link
        className="flex items-center gap-0.5 text-sm font-medium text-font-gray"
        href="/profile/help"
      >
        <Info className="size-5" />
        <span className="ml-2">
          Need Help
        </span>
      </Link>
    </>
  );
};

export default Help;
