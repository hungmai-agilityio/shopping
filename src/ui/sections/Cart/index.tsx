'use client';

import { memo, useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

// Libs + stores
import { useUserStore } from '@/stores';
import { getUserCart } from '@/libs';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Sections
import { ProductPayment } from '@/ui/sections';

// Hooks
import { useCartActions } from '@/hooks';
import { QUERY } from '@/constants';

interface CartSectionProps {
  productData: IProduct[];
}

const CartSection = memo(({ productData }: CartSectionProps) => {
  const { user } = useUserStore();
  const { data: cartData = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user!.id),
    enabled: !!user
  });

  const { removeFromCart, clearUserCart, saveNote, updateQuantity } =
    useCartActions({ cartData });

  // Total price (update when change quantity and remove product)
  const totalPrice = useMemo(() => {
    return cartData.reduce((acc: number, cartItem: ICart) => {
      const product = productData.find(
        (product) => product.id === cartItem.productId
      );

      if (product) {
        return acc + product.price * cartItem.quantity;
      }

      return acc;
    }, 0);
  }, [cartData, productData]);

  // Quantity product
  const quantity = useMemo(
    () => cartData.reduce((acc: number, item: ICart) => acc + item.quantity, 0),
    [cartData]
  );

  // Handle delete product from cart
  const handleDeleteProduct = useCallback(
    (productId: string) => {
      removeFromCart.mutate(productId);
    },
    [removeFromCart]
  );

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      updateQuantity.mutate({ id, newQuantity });
    },
    [updateQuantity]
  );

  // Handle save note product
  const handleSaveNote = useCallback(
    (id: string, note: string) => {
      saveNote.mutate({ id, note });
    },
    [saveNote]
  );

  // Handle confirm checkout
  const handleCheckoutCart = useCallback(() => {
    clearUserCart.mutate();
  }, [clearUserCart]);

  if (!cartData.length) {
    return (
      <div className="flex justify-center my-20">
        <Image
          src="/cart-empty.webp"
          alt="cart-empty"
          width={500}
          height={500}
          priority
        />
      </div>
    );
  }

  return (
    <ProductPayment
      cartData={cartData}
      products={productData}
      price={totalPrice}
      quantity={quantity}
      title="Cart Products"
      onDelete={handleDeleteProduct}
      onCheckout={handleCheckoutCart}
      onQuantityChange={handleQuantityChange}
      onSaveNote={handleSaveNote}
    />
  );
});

export default CartSection;
