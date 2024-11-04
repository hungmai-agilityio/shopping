'use client';

import { memo, useCallback, useState } from 'react';
import Image from 'next/image';

// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Components
import { Typography, Modal } from '@/ui/components';

// Sections
import { CheckoutSection } from '@/ui/sections';
import { useModal } from '@/hooks';

interface PaymentProps {
  products: IProduct[];
  cartData: ICart[];
  price: number;
  quantity: number;
  title: string;
  onDelete: (id: string) => void;
  onCheckout: () => void;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onSaveNote?: (id: string, note: string) => void;
}

const ProductPayment = memo(
  ({
    products,
    cartData,
    price,
    quantity,
    title,
    onDelete,
    onCheckout,
    onQuantityChange,
    onSaveNote
  }: PaymentProps) => {
    const [productToDelete, setProductToDelete] = useState<string | null>(null);

    const cartModal = useModal();
    const checkoutModal = useModal();

    const handleOpenModal = (productId: string) => {
      setProductToDelete(productId);
      cartModal.openModal();
    };

    const handleOpenModalCheckout = () => {
      checkoutModal.openModal();
    };

    // Handle delete product from cart
    const handleDeleteProduct = () => {
      if (productToDelete) {
        onDelete(productToDelete);
        cartModal.closeModal();
      }
    };

    // Handle confirm checkout
    const handleCheckoutCart = useCallback(() => {
      onCheckout();
      checkoutModal.closeModal();
    }, []);

    const handleSaveNote = (id: string, note: string) => {
      if (onSaveNote) {
        onSaveNote(id, note);
      }
    };
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
      <>
        <div className="my-20">
          <CheckoutSection
            carts={cartData}
            products={products}
            onDelete={handleOpenModal}
            onSaveNote={handleSaveNote}
            onCheckout={handleOpenModalCheckout}
            onQuantityChange={onQuantityChange}
            total={price}
            quantity={quantity}
            title={title}
          />
        </div>
        <Modal
          isOpen={cartModal.isOpen}
          onClose={cartModal.closeModal}
          title="Confirm Deletion"
          isConfirm
          buttonName="Delete"
          onConfirm={handleDeleteProduct}
        >
          <p>Are you sure you want to delete this item from your cart?</p>
        </Modal>
        <Modal
          isOpen={checkoutModal.isOpen}
          onClose={checkoutModal.closeModal}
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
            {cartData.map((item) => {
              const product = products.find(
                (product) => product.id === item.productId
              );

              if (!product) return null;

              return (
                <div key={item.id} className="mt-2 grid grid-cols-3 gap-5 text-center">
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
              Total: ${price}
            </Typography>
          </div>
        </Modal>
      </>
    );
  }
);

export default ProductPayment;
