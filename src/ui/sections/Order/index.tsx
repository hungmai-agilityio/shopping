'use client';

import { useCallback } from 'react';
import Image from 'next/image';

// Libs + stores
import { useUserStore, useCartStore } from '@/stores';

// Interfaces
import { IProduct } from '@/interfaces';

// Sections
import { ProductPayment } from '@/ui/sections';

interface OrderProps {
  products: IProduct[];
}
const OrderSection = ({ products }: OrderProps) => {
  const { user } = useUserStore();

  const { cart, updateQuantity, clearCart, totalItems, totalPrice } =
    useCartStore();

  // Handle delete product from cart
  const handleDeleteProduct = useCallback(() => {
    clearCart();
  }, []);

  // Handle update quantity
  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      updateQuantity(id, newQuantity, products);
    },
    [updateQuantity, products]
  );

  // Handle confirm checkout
  const handleCheckoutCart = useCallback(() => {
    clearCart();
  }, [user]);

  if (!cart.length) {
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
      cartData={cart}
      products={products}
      onDelete={handleDeleteProduct}
      onCheckout={handleCheckoutCart}
      onQuantityChange={handleQuantityChange}
      price={totalPrice}
      quantity={totalItems}
      title="Cart Checkout"
    />
  );
};

export default OrderSection;
