'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Libs + stores
import { useUserStore } from '@/stores';
import { getUserCart } from '@/libs';

// Components
import { Modal, UserIcon } from '@/ui/components';

// Constants
import { END_POINT, QUERY } from '@/constants';

// Interfaces
import { ICart, IUser } from '@/interfaces';

// Hooks
import { useModal } from '@/hooks';

interface UserActionProps {
  user: IUser;
  styles?: string;
  closeMenu?: () => void;
}

const UserAction = ({ user, styles, closeMenu }: UserActionProps) => {
  const router = useRouter();
  const { clearUser } = useUserStore();

  const authModal = useModal();
  const signOutModal = useModal();

  // Fetch cart data for the current user
  const { data: cartData = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user!.id),
    enabled: !!user
  });

  // Handle check currentUser and redirect to profile page
  const handleRedirectProfile = () => {
    closeMenu?.();
    if (!user) {
      authModal.openModal();
      return;
    }
    router.push(END_POINT.PROFILE);
  };

  // Handle check currentUser and redirect to cart page
  const handleRedirectCart = () => {
    closeMenu?.();
    if (!user) {
      authModal.openModal();
      return;
    }
    router.push(END_POINT.CART);
  };

  // Handle confirm for redirect to sign in page
  const handleConfirm = () => {
    router.push(END_POINT.SIGN_IN);
    authModal.closeModal();
  };

  // Handle check currentUser and redirect to wishlist page
  const handleRedirectWishList = () => {
    closeMenu?.();
    if (!user) {
      authModal.openModal();
      return;
    }
    router.push(END_POINT.WISHLIST);
  };

  const handleSignOut = () => {
    closeMenu?.();
    clearUser();
    router.push(END_POINT.SIGN_IN);
    signOutModal.closeModal();
  };

  return (
    <div className={styles}>
      <UserIcon
        src="/bag.svg"
        alt="cart icon"
        isBadge
        badgeCount={user ? cartData.length : 0}
        onClick={handleRedirectCart}
      />
      <UserIcon
        src="/heart.svg"
        alt="heart icon"
        onClick={handleRedirectWishList}
      />
      <UserIcon
        src="/user.svg"
        alt="user icon"
        onClick={handleRedirectProfile}
      />
      <Modal
        isOpen={authModal.isOpen}
        onClose={authModal.closeModal}
        title="Authentication request"
        buttonName="Yes"
        isConfirm
        onConfirm={handleConfirm}
      >
        <div>
          To perform this action, you need to log in, press the{' '}
          <strong>"Yes"</strong> button to proceed with login.
          <div className="my-5">
            <Image
              src="/auth-stop.webp"
              alt="stop action"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={signOutModal.isOpen}
        onClose={signOutModal.closeModal}
        title="Confirm sign out"
        buttonName="Sign out"
        isConfirm
        onConfirm={handleSignOut}
      >
        <div>
          Would you like to log out? Click <strong>Sign out</strong> to return
          to the login page.
          <div className="my-5">
            <Image
              src="/auth-stop.webp"
              alt="stop action"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        </div>
      </Modal>
      {user && (
        <UserIcon
          src="/logout.webp"
          alt="logout icon"
          onClick={signOutModal.openModal}
        />
      )}
    </div>
  );
};

export default UserAction;
