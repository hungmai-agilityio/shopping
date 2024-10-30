import { memo } from 'react';

// Constants
import { FONT_SIZE, FONT_WEIGHT, mada, TAG } from '@/constants';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Components
import { CartCheckout, CartProduct, Typography } from '@/ui/components';

interface CheckoutProps {
  carts: ICart[];
  products: IProduct[];
  onDelete: (productId: string) => void;
  onSaveNote: (id: string, note: string) => void;
  onCheckout: () => void;
  onQuantityChange: (id: string, newQuantity: number) => void;
  total: number;
  title: string;
  quantity: number;
}

const CheckoutSection = memo(
  ({
    carts,
    products,
    onDelete,
    onSaveNote,
    onCheckout,
    onQuantityChange,
    total,
    title,
    quantity
  }: CheckoutProps) => {
    return (
      <section className="container">
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H3}
          size={FONT_SIZE.MEDIUM}
          className={`${mada.className}`}
        >
          {title}
        </Typography>

        <div className="lg:flex gap-10">
          <div className="w-full">
            <CartProduct
              carts={carts}
              products={products}
              onDelete={onDelete}
              onSaveNote={onSaveNote}
              onQuantityChange={onQuantityChange}
            />
          </div>
          <div className="lg:mt-7 mt-10 flex justify-center">
            <CartCheckout
              products={quantity}
              onCheckout={onCheckout}
              total={total}
            />
          </div>
        </div>
      </section>
    );
  }
);

export default CheckoutSection;
