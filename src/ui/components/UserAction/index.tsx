'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Libs
import { fetchDataId, useUserStore } from '@/libs';
import { Icon, Modal } from '@/ui/components';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { ICart, IUser } from '@/interfaces';

interface UserActionProps {
  styles?: string;
}

const UserAction = ({ styles }: UserActionProps) => {
  const router = useRouter();
  const { user, clearUser } = useUserStore();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalSignOut, setShowModalSignOut] = useState<boolean>(false);

  // Fetch cart data for the current user
  const { data: cartData = [] } = useQuery<ICart[]>({
    queryKey: ['cart'],
    queryFn: () =>
      fetchDataId({ endpoint: `${END_POINT.CART}?userId=`, id: user?.id }),
    staleTime: 1000 * 60 * 5,
    enabled: !!user
  });

  // Handle check currentUser and redirect to profile page
  const handleRedirectProfile = () => {
    if (!user) {
      setShowModal(true);
      return;
    }
    router.push(END_POINT.PROFILE);
  };

  // Handle check currentUser and redirect to cart page
  const handleRedirectCart = () => {
    if (!user) {
      setShowModal(true);
      return;
    }
    router.push(END_POINT.CART);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleToggleModal = () => setShowModalSignOut((prev) => !prev);

  // Handle confirm for redirect to sign in page
  const handleConfirm = () => {
    router.push(END_POINT.SIGN_IN);
    handleCloseModal();
  };

  // Handle check currentUser and redirect to wishlist page
  const handleRedirectWishList = () => {
    if (!user) {
      setShowModal(true);
      return;
    }
    router.push(END_POINT.WISHLIST);
  };

  const handleSignOut = () => {
    clearUser();
    router.push(END_POINT.SIGN_IN);
    handleToggleModal();
  };

  return (
    <div className={styles}>
      <Icon
        src="/bag.svg"
        alt="cart icon"
        width={24}
        height={24}
        isBadge
        badgeCount={user ? cartData.length : 0}
        onClick={handleRedirectCart}
        priority
      />
      <Icon
        src="/heart.svg"
        alt="heart icon"
        width={24}
        height={24}
        onClick={handleRedirectWishList}
        priority
      />
      <Icon
        src="/user.svg"
        alt="user icon"
        width={24}
        height={24}
        onClick={handleRedirectProfile}
        priority
      />
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
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
        isOpen={showModalSignOut}
        onClose={handleToggleModal}
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
        <Icon
          src="/logout.webp"
          alt="logout icon"
          width={30}
          height={30}
          priority
          onClick={handleToggleModal}
        />
      )}
    </div>
  );
};

export default UserAction;
