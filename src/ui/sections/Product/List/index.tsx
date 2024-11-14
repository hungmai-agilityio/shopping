'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { END_POINT, QUERY } from '@/constants';

// Interfaces
import { IProduct, IUser, IWishlist } from '@/interfaces';

// Libs + stores
import { getUserWishList } from '@/libs';

// Components
import { Button, CardProduct, ModalAuth } from '@/ui/components';

// Hooks
import { useAddToWishlist, useModal, useRemoveFromWishlist } from '@/hooks';

interface CardProductListProps {
  products: IProduct[];
  isShowMore?: boolean;
  user: IUser | null;
}
const CardProductList = ({
  products,
  isShowMore,
  user
}: CardProductListProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const { push } = useRouter();
  const removeFromWishlist = useRemoveFromWishlist();
  const addToWishlist = useAddToWishlist();

  const { isOpen, closeModal, openModal } = useModal();

  // Get Data Wishlist
  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user!.id),
    enabled: !!user
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
  const handleToggleFavorite = useCallback(
    (product: IProduct) => {
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
    },
    [removeFromWishlist, addToWishlist]
  );

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
        <ModalAuth
          onClick={handleRedirectSignIn}
          isOpen={isOpen}
          onClose={closeModal}
        />
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
