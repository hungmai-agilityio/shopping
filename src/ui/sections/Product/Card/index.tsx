'use client';

import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { END_POINT, FONT_SIZE } from '@/constants';

// Interfaces
import { IProduct, IWishlist } from '@/interfaces';

// Libs
import { postData, deleteData, fetchDataId, useUserStore } from '@/libs';

// Components
import { Button, CardProduct, Modal, Typography } from '@/ui/components';
import { useState } from 'react';
import Image from 'next/image';

interface CardProductListProps {
  products: IProduct[];
  isShowMore?: boolean;
}
const CardProductList = ({ products, isShowMore }: CardProductListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const { push } = useRouter();
  const queryClient = useQueryClient();

  const { user } = useUserStore();

  // Get Data Wishlist
  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: ['wishlist'],
    queryFn: () =>
      fetchDataId({ endpoint: `${END_POINT.WISHLIST}?userId=`, id: user?.id }),
    staleTime: 1000 * 60 * 5,
    enabled: !!user
  });

  /**
   * Calling function adds data to wishlist and mutation
   * React Query will automatically refetch the query ['wishlist'] data to ensure the data is always up to date.
   */
  const addToWishlist = useMutation({
    mutationFn: (item: IWishlist) =>
      postData({ endpoint: END_POINT.WISHLIST, data: item }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    }
  });

  // Calling function remove data from wishlist and mutation
  const removeFromWishlist = useMutation({
    mutationFn: (id: string) =>
      deleteData({ endpoint: END_POINT.WISHLIST, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
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
      setShowModal(true);
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

  const handleCloseModal = () => setShowModal(false);

  const handleRedirectSignIn = () => {
    push(END_POINT.SIGN_IN);
    handleCloseModal();
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
          isOpen={showModal}
          onClose={handleCloseModal}
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
