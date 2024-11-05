'use client';

import { useCallback, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { MESSAGE_API, QUERY, STATUS } from '@/constants';

// Interfaces
import { IWishlist, IProduct, ICart, IUser } from '@/interfaces';

// Libs + stores
import { getUserWishList, getUserCart, updateCart } from '@/libs';

// Components
import { Modal, WishList, ToastMessage } from '@/ui/components';

// Hooks
import { useAddDataToCart, useModal, useRemoveFromWishlist } from '@/hooks';

interface WishListSectionProps {
  products: IProduct[];
  user: IUser;
}

const WishListSection = ({ user, products }: WishListSectionProps) => {
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const removeFromWishlist = useRemoveFromWishlist();
  const addDataToCart = useAddDataToCart();
  const queryClient = useQueryClient();
  const { isOpen, closeModal, openModal } = useModal();

  // Fetch wishlist items
  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user!.id),
    enabled: !!user
  });

  // Handle toggle modal delete product
  const handleOpenModal = (id: string) => {
    setProductToDelete(id);
    openModal();
  };

  // Handle delete product from wishlist
  const handleDeleteProduct = useCallback(() => {
    if (productToDelete) {
      removeFromWishlist.mutate(productToDelete);
      closeModal();
      setProductToDelete(null);
    }
  }, [productToDelete, removeFromWishlist]);

  // Handle adding product to cart
  const handleAddProductCart = useCallback(
    async (item: IWishlist) => {
      const cartItems = await getUserCart(user!.id);

      const existingItem = cartItems.find(
        (cartItem: ICart) =>
          cartItem.productId === item.productId && cartItem.userId === user?.id
      );

      if (existingItem) {
        await updateCart(existingItem.id, {
          quantity: existingItem.quantity + 1
        });

        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.UPDATE_CART_SUCCESS
        });
      }
      if (!existingItem) {
        const newItem: ICart = {
          id: uuidv4(),
          userId: user!.id,
          productId: item.productId,
          color: 'White',
          note: '',
          quantity: 1
        };
        addDataToCart.mutate(newItem);
        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.UPDATE_CART_SUCCESS
        });
      }
    },
    [user, queryClient]
  );

  if (wishlistError)
    return <p>Error loading wishlist: {wishlistError.message}</p>;

  return (
    <>
      <section className="my-20 container">
        <WishList
          data={wishlist}
          products={products}
          isDisable={addDataToCart.isPending}
          onAddCart={handleAddProductCart}
          onDelete={handleOpenModal}
        />
      </section>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Confirm Deletion"
        isConfirm
        buttonName="Delete"
        onConfirm={handleDeleteProduct}
      >
        <p>Are you sure you want to delete this item from your wishlist?</p>
      </Modal>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default WishListSection;
