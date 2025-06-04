import Link from "next/link";
import { BsShop } from "react-icons/bs";

const Logo = () => {
  return (
    <>
      <Link href='/'
        className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold uppercase text-white"
      >
        <span>
          <BsShop />
        </span>
        <span className="">My Shop</span>
      </Link>
    </>
  );
};

export default Logo;

