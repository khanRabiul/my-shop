import { PhoneCall } from "lucide-react";
import Link from "next/link";

const ContactNumber = () => {
  return (
    <>    
      <Link
        className="flex items-center gap-0.5 text-sm font-medium text-font-gray"
        href="tel:+11234567890"
        title="Call us"
      >
        <PhoneCall className="size-5" />
        <span className="ml-2">
          +1 (123) 456-7890
        </span>
      </Link>
    </>
  );
};

export default ContactNumber;