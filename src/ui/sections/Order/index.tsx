'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';

// Libs
import { useCartStore, useUserStore } from '@/libs';

// Components
import { Typography, Modal } from '@/ui/components';

// Sections
import { CheckoutSection } from '@/ui/sections';
import { IProduct } from '@/interfaces';

interface OrderProps {
  products: IProduct[];
}
const OrderSection = ({ products }: OrderProps) => {
  const { user } = useUserStore();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isModalCheckoutOpen, setModalCheckoutOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const { cart, updateQuantity, clearCart, totalItems, totalPrice } =
    useCartStore();

  // Handle toggle modal
  const handleOpenModal = (productId: string) => {
    setProductToDelete(productId);
    setModalOpen(true);
  };

  const handleOpenModalCheckout = () => {
    setModalCheckoutOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);
  const handleCloseModalCheckout = () => setModalCheckoutOpen(false);

  // Handle delete product from cart
  const handleDeleteProduct = useCallback(() => {
    if (productToDelete) {
      clearCart();
      handleCloseModal();
    }
  }, [productToDelete, products]);

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
    handleCloseModalCheckout();
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
    <>
      <div className="my-20">
        <CheckoutSection
          carts={cart}
          products={products}
          onDelete={handleOpenModal}
          onSaveNote={() => {}}
          onCheckout={handleOpenModalCheckout}
          onQuantityChange={handleQuantityChange}
          total={totalPrice}
          quantity={totalItems}
          title="Cart Checkout"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Confirm Deletion"
        isConfirm
        buttonName="Delete"
        onConfirm={handleDeleteProduct}
      >
        <p>Are you sure you want to delete this item from your cart?</p>
      </Modal>
      <Modal
        isOpen={isModalCheckoutOpen}
        onClose={handleCloseModalCheckout}
        title="Confirm Checkout"
        isConfirm
        buttonName="Checkout"
        onConfirm={handleCheckoutCart}
      >
        <div className="border border-dark mx-auto h-full p-4">
          <Typography
            color="text-second"
            tag={TAG.H4}
            fontWeight={FONT_WEIGHT.BOLD}
          >
            Your order:
          </Typography>

          {cart.map((item) => {
            const product = products.find(
              (product) => product.id === item.productId
            );

            if (!product) return null;

            return (
              <div key={item.id} className="mt-2 flex justify-between gap-5">
                <Typography size={FONT_SIZE.MIMI}>
                  <strong>Product:</strong> {product.name}
                </Typography>
                <Typography size={FONT_SIZE.MIMI}>
                  <strong>{item.color}</strong>
                </Typography>
                <Typography size={FONT_SIZE.MIMI}>
                  <strong>
                    ${product.price} x {item.quantity}
                  </strong>
                </Typography>
              </div>
            );
          })}
          <Typography
            color="text-red-500"
            className="mt-5"
            fontWeight={FONT_WEIGHT.BOLD}
          >
            Total: ${totalPrice}
          </Typography>
        </div>
      </Modal>
    </>
  );
};

export default OrderSection;
