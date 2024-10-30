import { memo } from 'react';

// Constants
import { mada } from '@/constants';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Components
import { Body, Table, CartItem } from '@/ui/components';

interface CartProductProps {
  carts: ICart[];
  products: IProduct[];
  onDelete: (id: string) => void;
  onSaveNote?: (id: string, note: string) => void;
  onQuantityChange?: (id: string, newQuantity: number) => void;
}

const CartProduct = memo(
  ({
    carts,
    products,
    onDelete,
    onSaveNote,
    onQuantityChange
  }: CartProductProps) => {
    return (
      <div className={`${mada.className} h-table overflow-y-auto scrollbar`}>
        <Table>
          <Body>
            {carts.map((cart) => {
              const product = products.find((p) => p.id === cart.productId);
              if (!product) return null;
              return (
                <CartItem
                  key={cart.id}
                  {...cart}
                  product={product}
                  onDelete={onDelete}
                  onSaveNote={onSaveNote}
                  onQuantityChange={onQuantityChange}
                />
              );
            })}
          </Body>
        </Table>
      </div>
    );
  }
);

export default CartProduct;
