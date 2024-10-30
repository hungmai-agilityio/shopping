'use client';

import React, { memo, useState } from 'react';
import { clsx } from 'clsx';

// Components
import Icon from '@/ui/components/common/Icon';
import { mada } from '@/constants';

interface QuantityProps {
  value: number;
  isBorder?: boolean;
  styles?: string;
  onQuantityChange?: (newQuantity: number) => void;
}

const Quantity = memo(
  ({ value = 1, isBorder, styles, onQuantityChange }: QuantityProps) => {
    const [quantity, setQuantity] = useState<number>(value);

    const handDecrease = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onQuantityChange?.(newQuantity);
      }
    };

    const handleIncrease = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    };

    return (
      <div
        className={clsx(
          'flex items-center gap-4 font-bold bg-white w-36 h-12 justify-center',
          { 'border border-dark': isBorder },
          mada.className,
          styles
        )}
      >
        <Icon
          src="/minus.svg"
          alt="minus icon"
          width={24}
          height={24}
          onClick={handDecrease}
          isDisabled={quantity === 1}
          priority
        />
        <span className="px-2">{quantity}</span>
        <Icon
          src="/plus.svg"
          alt="plus icon"
          width={24}
          height={24}
          onClick={handleIncrease}
          priority
        />
      </div>
    );
  }
);

export default Quantity;
