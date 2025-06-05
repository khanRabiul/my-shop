import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UserRound } from 'lucide-react';

const UsersActions = () => {
  return (
    <div className='flex items-center gap-4 text-white'>
      <ShoppingCart />
      <Heart />
      <UserRound />
    </div>
  );
};

export default UsersActions;