import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest, FaReddit, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLink = () => {
  return (
    <>
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
    </>
  );
};

export default SocialMediaLink;