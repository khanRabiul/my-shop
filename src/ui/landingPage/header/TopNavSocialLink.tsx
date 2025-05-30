import { X } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const TopNavSocialLink = () => {


  return (
    <section className="bg-[#1B6392] py-1.5">
      <div className="container">
        <div
          className="md:flex md:flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div>
            <p className="text-white text-sm">Welcome to My Shop Multivendor Ecommerce website</p>
          </div>

          <div className='inline-flex items-center gap-3 text-white'>
            <span>Follow us:</span>
            <Link
              className='cursor-pointer text-lg'
              href='https://x.com/'>
              <FaXTwitter />
            </Link>
            <Link
              className='cursor-pointer text-lg'
              href='https://facebook.com/'>
              <FaFacebook />
            </Link>
            <Link
              className='cursor-pointer text-lg'
              href='https://pinterst.com/'>
              <FaPinterest />
            </Link>
            <Link
              className='cursor-pointer text-lg'
              href='https://pinterst.com/'>
              <FaReddit />
            </Link>
            <Link
              className='cursor-pointer text-lg'
              href='https://pinterst.com/'>
              <FaYoutube />
            </Link>
            <Link
              className='cursor-pointer text-lg'
              href='https://pinterst.com/'>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavSocialLink;