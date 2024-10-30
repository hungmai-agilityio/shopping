'use client';
import { memo, useState } from 'react';

// Constants
import { FONT_SIZE, FONT_WEIGHT, mada, TAG } from '@/constants';

// Components
import { Button, Input, Typography } from '@/ui/components/common';

interface CartCheckoutProps {
  products: number;
  total: number;
  onCheckout: () => void;
}

const CartCheckout = memo(
  ({ products, total, onCheckout }: CartCheckoutProps) => {
    const [couponCode, setCouponCode] = useState<string>('');

    const handleChangeCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCouponCode(e.target.value);
    };

    const handleCheckout = () => {
      setCouponCode('');
      onCheckout();
    };

    return (
      <div
        className={`${mada.className} w-cart-md h-cart-md bg-gray-light p-6 text-lg`}
      >
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          size={FONT_SIZE.X_SMALL}
          className="mb-1"
        >
          Coupon Code
        </Typography>
        <Input value={couponCode} onChange={handleChangeCoupon} />
        <div className="flex justify-end">
          <Button disabled>Check</Button>
        </div>

        <div className="mt-9 flex justify-between">
          <div>
            <Typography
              fontWeight={FONT_WEIGHT.BOLD}
              size={FONT_SIZE.X_SMALL}
              className="mb-1"
            >
              Subtotal
            </Typography>
            <Typography
              fontWeight={FONT_WEIGHT.THIN}
              size={FONT_SIZE.X_SMALL}
              className="mb-1"
              tag={TAG.SPAN}
              color="text-gray-400"
            >
              {products} Product
            </Typography>
          </div>
          <Typography
            fontWeight={FONT_WEIGHT.THIN}
            size={FONT_SIZE.X_SMALL}
            className="mb-1"
          >
            $ {total} USD
          </Typography>
        </div>
        <hr className="border-t-2 border-dashed border-gray-300 my-6" />

        <div className="flex justify-between">
          <Typography
            fontWeight={FONT_WEIGHT.BOLD}
            size={FONT_SIZE.X_SMALL}
            className="mb-1"
          >
            Total
          </Typography>
          <Typography
            fontWeight={FONT_WEIGHT.THIN}
            size={FONT_SIZE.X_SMALL}
            className="mb-1"
          >
            $ {total} USD
          </Typography>
        </div>

        <div className="flex justify-end mt-5">
          <Button onClick={handleCheckout}>Checkout</Button>
        </div>
      </div>
    );
  }
);

export default CartCheckout;
