'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { END_POINT, FONT_SIZE, QUERY } from '@/constants';

// Interfaces
import { IProduct, IWishlist } from '@/interfaces';

// Libs + stores
import { useUserStore } from '@/stores';
import { postData, deleteData, getUserWishList } from '@/libs';

// Components
import { Button, CardProduct, Modal, Typography } from '@/ui/components';

// Hooks
import { useModal } from '@/hooks';

interface CardProductListProps {
  products: IProduct[];
  isShowMore?: boolean;
}
const CardProductList = ({ products, isShowMore }: CardProductListProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const { push } = useRouter();
  const queryClient = useQueryClient();

  const { user } = useUserStore();
  const { isOpen, closeModal, openModal } = useModal();
  // Get Data Wishlist
  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user!.id),
    enabled: !!user
  });

  /**
   * Calling function adds data to wishlist and mutation
   * React Query will automatically refetch the query [QUERY.WISHLIST] data to ensure the data is always up to date.
   */
  const addToWishlist = useMutation({
    mutationFn: (item: IWishlist) =>
      postData({ endpoint: END_POINT.WISHLIST, data: item }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] });
    }
  });

  // Calling function remove data from wishlist and mutation
  const removeFromWishlist = useMutation({
    mutationFn: (id: string) =>
      deleteData({ endpoint: END_POINT.WISHLIST, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] });
    }
  });

  /**
   * Check if this product is in your favorites list?
   * @param {string} productId
   */
  const isProductInWishlist = (productId: string) =>
    wishlist.some((item: IWishlist) => item.productId === productId);

  /**
   * Handle toggle add/remove product with Wishlist
   * @param {IProduct} product
   */
  const handleToggleFavorite = (product: IProduct) => {
    if (!user) {
      openModal();
      return;
    }
    if (isProductInWishlist(product.id)) {
      const wishlistItem = wishlist.find(
        (item: IWishlist) => item.productId === product.id
      );
      if (wishlistItem) {
        removeFromWishlist.mutate(wishlistItem.id);
      }
      return;
    }

    const newItem: IWishlist = {
      id: uuidv4(),
      userId: user!.id,
      productId: product.id,
      color: 'White'
    };

    addToWishlist.mutate(newItem);
  };

  const handleRedirectSignIn = () => {
    push(END_POINT.SIGN_IN);
    closeModal();
  };

  const handleRedirectPreview = (id: string) => {
    push(`${id}`);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const filtered = products as IProduct[];
  const data = filtered.slice(0, visibleCount);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-6 mx-auto">
        {data.map((item: IProduct) => (
          <CardProduct
            key={item.id}
            id={item.id}
            photo={item.image}
            name={item.name}
            onClick={handleRedirectPreview}
            onFavorite={handleToggleFavorite.bind(null, item)}
            price={item.price}
            rating={item.rating}
            sell={item.sell}
            isFavorite={isProductInWishlist(item.id)}
          />
        ))}
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title="Authentication request"
          buttonName="Yes"
          isConfirm
          onConfirm={handleRedirectSignIn}
        >
          <Typography size={FONT_SIZE.X_SMALL}>
            To perform this action, you need to log in, press the{' '}
            <strong>"Yes"</strong> button to proceed with login
            <div className="my-5">
              <Image
                src="/auth-stop.webp"
                alt="stop action"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </Typography>
        </Modal>
      </div>
      {isShowMore && (
        <div className="mt-10 text-center">
          {visibleCount < filtered!.length && (
            <Button onClick={handleShowMore}>See More</Button>
          )}
        </div>
      )}
    </>
  );
};

export default CardProductList;
