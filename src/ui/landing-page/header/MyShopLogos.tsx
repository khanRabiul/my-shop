import Link from "next/link";
import { BsShop } from "react-icons/bs";

const MyShopLogos = () => {
  return (
    <Link
    href='/'
    className="text-white font-semibold inline-flex items-center gap-1">
    <BsShop />
    <span className="">My Shop</span>
    </Link>
  );
};

export default MyShopLogos;