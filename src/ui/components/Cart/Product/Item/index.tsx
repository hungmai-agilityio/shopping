'use client';

import { memo, useState } from 'react';

// Constants
import { CELL, FONT_WEIGHT, SIZE, TAG, TYPE } from '@/constants';

// Components
import { Dropdown, CardImage } from '@/ui/components';
import {
  Button,
  Cell,
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
      <Row key={id} isTD styles="relative h-60">
        <Cell size={SIZE.SMALL} type={CELL.TD} styles="px-10">
          <div className="w-32 h-32">
            <CardImage src={product.image} alt={product.name} autoSize isBlur />
          </div>
          <Dropdown
            styles="absolute bottom-5"
            isOpen={isOpen}
            setVisible={setVisible}
          >
            <div className="absolute z-10 bg-white p-2 rounded shadow-lg mt-2 w-96 text-base font-thin">
              <Input
                variant={TYPE.THIRD}
                value={currentNote}
                placeholder="writing your note"
                className="text-sm"
                onChange={(e) => setCurrentNote(e.target.value)}
              />
              <Button onClick={handleSaveNote}>Save</Button>
            </div>
          </Dropdown>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD}>
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{product.name}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            className="md:text-lg text-xs"
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
            className="md:text-lg text-xs"
          >
            Price
          </Typography>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD} styles="text-center">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{product.stoct}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            className="md:text-lg text-xs"
          >
            In Stock
          </Typography>
        </Cell>
        <Cell size={SIZE.SMALL} type={CELL.TD} styles="text-center">
          <div className="w-6 h-6 relative">
            <Icon
              src="/delete.svg"
              alt="Delete"
              width={24}
              height={24}
              onClick={() => onDelete(id)}
              priority
            />
          </div>
          <Quantity
            value={quantity}
            styles="absolute bottom-5 right-20"
            onQuantityChange={handleQuantityChange}
          />
        </Cell>
      </Row>
    );
  }
);

export default CartItem;
