'use client';

import { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { END_POINT, MESSAGE_API, STATUS } from '@/constants';

// Interfaces
import { IWishlist, IProduct, ICart } from '@/interfaces';

// Libs
import {
  deleteData,
  fetchDataId,
  useUserStore,
  postData,
  updateData,
} from '@/libs';

// Components
import { Modal, WishList } from '@/ui/components';
import ToastMessage from '@/ui/components/common/ToastMessage';

interface WishListSectionProps {
  products: IProduct[];
}

const WishListSection = ({products}: WishListSectionProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const { user } = useUserStore();
  const queryClient = useQueryClient();

  // Fetch wishlist items
  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: ['wishlist'],
    queryFn: () =>
      fetchDataId({ endpoint: `${END_POINT.WISHLIST}?userId=`, id: user?.id }),
    staleTime: 1000 * 60 * 5,
    enabled: !!user
  });

  const removeFromWishlist = useMutation({
    mutationFn: (id: string) =>
      deleteData({ endpoint: END_POINT.WISHLIST, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    }
  });

  // Handle toggle modal delete product
  const handleOpenModal = (id: string) => {
    setProductToDelete(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  // Handle delete product from wishlist
  const handleDeleteProduct = useCallback(() => {
    if (productToDelete) {
      removeFromWishlist.mutate(productToDelete);
      handleCloseModal();
      setProductToDelete(null);
    }
  }, [productToDelete, removeFromWishlist]);

  const addToCart = useMutation({
    mutationFn: (item: ICart) =>
      postData({ endpoint: END_POINT.CART, data: item }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  // Handle adding product to cart
  const handleAddProductCart = useCallback(
    async (item: IWishlist) => {
      const cartItems = await fetchDataId({
        endpoint: `${END_POINT.CART}?userId=`,
        id: user?.id
      });

      const existingItem = cartItems.find(
        (cartItem: ICart) =>
          cartItem.productId === item.productId && cartItem.userId === user?.id
      );

      if (existingItem) {
        await updateData({
          endpoint: END_POINT.CART,
          id: existingItem.id,
          data: { quantity: existingItem.quantity + 1 },
          updateMethod: 'PATCH'
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
        addToCart.mutate(newItem);
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
          isDisable={addToCart.isPending}
          onAddCart={handleAddProductCart}
          onDelete={handleOpenModal}
        />
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
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
