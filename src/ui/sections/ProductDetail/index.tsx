'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import {
  END_POINT,
  FONT_SIZE,
  FONT_WEIGHT,
  popping,
  TAG,
  SIZE,
  mada,
  QUERY,
  STATUS,
  MESSAGE_API
} from '@/constants';

// Interfaces
import { IProduct, ICart } from '@/interfaces';

// Libs + stores
import { useCartStore, useUserStore } from '@/stores';
import { getUserCart, updateCart } from '@/libs';

// Components
import {
  Button,
  Icon,
  Quantity,
  Typography,
  ColorPicker,
  CardImage,
  ModalAuth,
  ToastMessage
} from '@/ui/components';

// Hooks
import { useAddDataToCart, useModal } from '@/hooks';

interface DetailProps {
  product: IProduct;
}

const ProductDetail = ({ product }: DetailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors[0]);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const { addToCart } = useCartStore();
  const { user } = useUserStore();
  const addDataToCart = useAddDataToCart();

  const { push } = useRouter();
  const { isOpen, closeModal, openModal } = useModal();

  // Fetch cart items
  const { data: cartItems = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART, user?.id],
    queryFn: () => getUserCart(user!.id),
    enabled: !!user?.id
  });

  // Handle set quantity
  const handleQuantityChange = useCallback((newQuantity: number) => {
    setQuantity(newQuantity);
  }, []);

  // Handle set color
  const handleColorChange = useCallback((newColor: string) => {
    setColor(newColor);
  }, []);

  // Handle confirm for redirect to sign in page
  const handleConfirm = () => {
    push(END_POINT.SIGN_IN);
    closeModal();
  };

  // Handle add product to cart
  const handleAddToCart = useCallback(async () => {
    if (!user) {
      openModal();
      return;
    }

    const existingItem = cartItems.find(
      (cartItem: ICart) =>
        cartItem.productId === product.id && cartItem.color === color
    );

    if (existingItem) {
      await updateCart(existingItem.id, {
        quantity: existingItem.quantity + quantity
      });
      setToast({
        status: STATUS.SUCCESS,
        message: MESSAGE_API.UPDATE_CART_SUCCESS
      });
    } else {
      const cartData: ICart = {
        id: uuidv4(),
        userId: user!.id,
        productId: product.id,
        color: color || product.colors[0],
        quantity: quantity,
        note: ''
      };

      addDataToCart.mutate(cartData);
       setToast({
         status: STATUS.SUCCESS,
         message: MESSAGE_API.ADD_PRODUCT_SUCCESS
       });
    }
  }, [product, color, quantity, addDataToCart, cartItems, user?.id]);

  const handleCheckout = useCallback(() => {
    if (!user) {
      openModal();
      return;
    }

    const cartData: ICart = {
      id: uuidv4(),
      userId: user!.id,
      productId: product.id,
      color: color || product.colors[0],
      quantity: quantity,
      note: ''
    };

    addToCart(cartData, product);
    push(END_POINT.CHECKOUT);
  }, [product, color, quantity, addToCart, cartItems, user?.id]);

  return (
    <section className="md:flex gap-10 container">
      <div className="w-full">
        <CardImage
          src={product.image}
          alt={product.name}
          width={588}
          height={400}
          className="w-card-sm h-card-md"
          priority
          isBlur
        />
        <div className="md:flex hidden my-4 gap-6">
          {product.imageDetail?.map((item, index) => (
            <CardImage
              key={index}
              src={item}
              alt="detail-img"
              width={180}
              height={180}
              className="w-btn-md h-img-sm"
              priority
            />
          ))}
        </div>
      </div>
      <div className={`${popping.className} w-full`}>
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H3}
          className={`${mada.className} lg:text-heading text-2xl`}
        >
          {product.name}
        </Typography>
        <Typography
          size={FONT_SIZE.X_SMALL}
          className="my-7"
          color="text-gray-400"
        >
          {product.description}
        </Typography>
        <div className="flex gap-5">
          <Icon
            src="/star.svg"
            alt="icon-star"
            width={122}
            height={18}
            priority
          />
          <Typography
            size={FONT_SIZE.MIMI}
            color="text-dark"
            className={`${mada.className}`}
          >
            ( {product.rating} )
          </Typography>
        </div>
        <div className="mt-7 flex justify-between">
          <ColorPicker
            colors={product.colors!}
            onClick={handleColorChange}
            selectedColor={color}
          />
          <div>
            <Typography fontWeight={FONT_WEIGHT.BOLD} size={FONT_SIZE.X_SMALL}>
              Stock
            </Typography>
            <div className="mt-3 flex gap-3">
              <Typography
                size={FONT_SIZE.X_SMALL}
                color="text-dark"
                className={`${mada.className}`}
              >
                ( {product.stoct} )
              </Typography>
              <Icon
                src="/cart.svg"
                alt="cart-icon"
                width={21}
                height={21}
                priority
              />
            </div>
          </div>
        </div>
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          size={FONT_SIZE.X_SMALL}
          className="mt-7"
        >
          Size
        </Typography>
        <div className="flex gap-4 mt-5">
          {product.sizes?.map((size, index) => (
            <Button
              key={index}
              className="w-6 h-6 bg-gray-100 rounded-full text-sm focus:bg-second focus:font-bold focus:text-white"
            >
              {size}
            </Button>
          ))}
        </div>
        <div className="flex justify-between items-end mt-7">
          <div>
            <Typography fontWeight={FONT_WEIGHT.BOLD} size={FONT_SIZE.X_SMALL}>
              Quantity
            </Typography>
            <Quantity
              value={quantity}
              isBorder
              onQuantityChange={handleQuantityChange}
              styles="mt-5"
            />
          </div>
          <Typography
            fontWeight={FONT_WEIGHT.BOLD}
            className={`${mada.className} lg:text-heading text-lg`}
          >
            $ {product.price} USD
          </Typography>
        </div>
        <div className="mt-7 flex gap-6">
          <Button size={SIZE.LARGE} onClick={handleCheckout}>
            Checkout
          </Button>
          <Button
            size={SIZE.SMALL}
            style={{ paddingLeft: '6px' }}
            onClick={handleAddToCart}
            disabled={addDataToCart.isPending}
          >
            <Image
              src="/bag-second.svg"
              alt="cart-button"
              width={32}
              height={32}
              priority
            />
          </Button>
        </div>
      </div>
      <ModalAuth onClick={handleConfirm} isOpen={isOpen} onClose={closeModal} />
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </section>
  );
};

export default ProductDetail;
