'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

// Constants
import { END_POINT, FONT_SIZE, FONT_WEIGHT, mada, TAG } from '@/constants';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Libs
import { deleteData, fetchDataId, updateData, useUserStore } from '@/libs';

// Components
import { Typography, Modal } from '@/ui/components';

// Sections
import { CheckoutSection } from '@/ui/sections';

interface CartSectionProps {
  productData: IProduct[];
}

const CartSection = memo(({ productData }: CartSectionProps) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isModalCheckoutOpen, setModalCheckoutOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const { user } = useUserStore();

  const { data: cartData = [] } = useQuery<ICart[]>({
    queryKey: ['cart'],
    queryFn: () =>
      fetchDataId({ endpoint: `${END_POINT.CART}?userId=`, id: user!.id }),
    enabled: !!user
  });

  // Total product (update when change quantity and remove product)
  const total = useMemo(() => {
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

  // Logic - remove product from cart
  const removeFromCart = useMutation({
    mutationFn: (id: string) => deleteData({ endpoint: END_POINT.CART, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  const removeUserCart = useMutation({
    mutationFn: async (userId: string) => {
      const cartItems = await fetchDataId({
        endpoint: `${END_POINT.CART}?userId=`,
        id: userId
      });

      await Promise.all(
        cartItems.map((item: ICart) =>
          deleteData({
            endpoint: END_POINT.CART,
            id: item.id
          })
        )
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  // Logic - save and update note for products in the cart
  const saveNoteMutation = useMutation({
    mutationFn: ({ id, note }: { id: string; note: string }) =>
      updateData({
        endpoint: END_POINT.CART,
        id,
        data: { note },
        updateMethod: 'PATCH'
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  // Logic - update quantity product
  const quantityChangeMutation = useMutation({
    mutationFn: ({ id, newQuantity }: { id: string; newQuantity: number }) =>
      updateData({
        endpoint: END_POINT.CART,
        id,
        data: { quantity: newQuantity },
        updateMethod: 'PATCH'
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

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
      removeFromCart.mutate(productToDelete);
      handleCloseModal();
      setProductToDelete(null);
    }
  }, [productToDelete, removeFromCart]);

  // Handle save note product
  const handleSaveNote = useCallback((id: string, note: string) => {
    saveNoteMutation.mutate({ id, note });
  }, []);

  // Handle update quantity
  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      quantityChangeMutation.mutate({ id, newQuantity });
    },
    []
  );

  // Handle confirm checkout
  const handleCheckoutCart = useCallback(() => {
    if (user && user.id) {
      removeUserCart.mutate(user.id);
      handleCloseModalCheckout();
    }
  }, [user, removeUserCart]);

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
          products={productData}
          onDelete={handleOpenModal}
          onSaveNote={handleSaveNote}
          onCheckout={handleOpenModalCheckout}
          onQuantityChange={handleQuantityChange}
          total={total}
          quantity={quantity}
          title="Cart Product"
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

          {cartData.map((item) => {
            const product = productData.find(
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
            Total: ${total}
          </Typography>
        </div>
      </Modal>
    </>
  );
});

export default CartSection;
