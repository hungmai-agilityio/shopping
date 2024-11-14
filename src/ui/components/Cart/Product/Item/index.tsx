'use client';

import { memo, useState } from 'react';

// Constants
import { CELL, FONT_SIZE, FONT_WEIGHT, SIZE, TAG, TYPE } from '@/constants';

// Components
import { Dropdown, CardImage } from '@/ui/components';
import {
  Button,
  Cell,
  DropdownNote,
  Icon,
  Input,
  Quantity,
  Row,
  Typography
} from '@/ui/components/common';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

interface CartItemProps extends ICart {
  product: IProduct;
  onDelete: (id: string) => void;
  onSaveNote?: (id: string, note: string) => void;
  onQuantityChange?: (id: string, newQuantity: number) => void;
}

const CartItem = memo(
  ({
    id,
    note = '',
    quantity,
    color,
    product,
    onDelete,
    onSaveNote,
    onQuantityChange
  }: CartItemProps) => {
    const [currentNote, setCurrentNote] = useState<string>(note);
    const [isOpen, setVisible] = useState<boolean>(false);

    // Handle save note for product
    const handleSaveNote = () => {
      setVisible(false);
      onSaveNote && onSaveNote(id, currentNote);
    };

    // Handles changes to quantity values
    const handleQuantityChange = (newQuantity: number) => {
      onQuantityChange && onQuantityChange(id, newQuantity);
    };

    return (
      <Row key={id} isTD styles="relative lg:h-60 h-full">
        <Cell size={SIZE.SMALL} type={CELL.TD} styles="px-10">
          <div className="w-32 h-32">
            <CardImage src={product.image} alt={product.name} autoSize isBlur />
          </div>
          <DropdownNote
            isOpen={isOpen}
            styles="absolute bottom-5 lg:flex hidden"
            setVisible={setVisible}
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            onClick={handleSaveNote}
          />
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD}>
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{product.name}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            Color: {color}
          </Typography>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD} styles="text-center">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>
            $ {product.price} USD
          </Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            Price
          </Typography>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD} styles="text-center">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{product.stoct}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            In Stock
          </Typography>
        </Cell>
        <Cell size={SIZE.SMALL} type={CELL.TD} styles="text-center">
          <div className="w-6 h-6 relative flex justify-between">
            <Icon
              src="/delete.svg"
              alt="Delete"
              width={24}
              height={24}
              onClick={() => onDelete(id)}
              priority
              className="w-6 h-6"
            />
          </div>
          <Quantity
            value={quantity}
            styles="lg:absolute bottom-5 right-20"
            onQuantityChange={handleQuantityChange}
          />
        </Cell>
      </Row>
    );
  }
);

export default CartItem;
