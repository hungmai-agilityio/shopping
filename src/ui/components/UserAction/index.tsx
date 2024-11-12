'use client';

import { useEffect, useState } from 'react';
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
import { ICart } from '@/interfaces';

// Hooks
import { useModal } from '@/hooks';

interface UserActionProps {
  styles?: string;
  closeMenu?: () => void;
}

const UserAction = ({ styles, closeMenu }: UserActionProps) => {
  const { user, clearUser } = useUserStore();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const router = useRouter();

  const authModal = useModal();
  const signOutModal = useModal();

  // Fetch cart data for the current user
  const { data: cartData = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user!.id),
    enabled: !!user
  });

  useEffect(() => {
    setIsMounted(true);
  }, [user]);

  if (!isMounted) {
    return (
      <div className={styles}>
        <UserIcon
          src="/bag.svg"
          alt="cart icon"
          isBadge
          badgeCount={user ? cartData.length : 0}
        />
        <UserIcon src="/heart.svg" alt="heart icon" />
        <UserIcon src="/user.svg" alt="user icon" />
      </div>
    );
  }

  // Handle check user and redirect to profile page
  const handleRedirectProfile = () => {
    closeMenu?.();
    if (!user) {
      authModal.openModal();
      return;
    }
    router.push(END_POINT.PROFILE);
  };

  // Handle check user and redirect to cart page
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

  // Handle check user and redirect to wishlist page
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
