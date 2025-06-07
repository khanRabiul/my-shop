import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UserRound } from 'lucide-react';
import Link from 'next/link';
import Theme from './Theme';

const UsersActions = () => {
  return (
    <>
      <div className='flex items-center gap-4 text-white'>
        <Link href='/cart'>
          <ShoppingCart />
        </Link>
        <Link href='/wishlist'>
          <Heart />
        </Link>
        <Link href='/profile'>
          <UserRound />
        </Link>
      <Theme />
      </div>
    </>
  );
};

export default UsersActions;