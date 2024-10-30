'use client';

import { MouseEvent } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

interface CardProductProps {
  id: string;
  photo: string;
  name: string;
  onFavorite?: (id: string) => void;
  onClick: (id: string) => void;
  price?: number;
  rating?: string;
  sell?: string;
  isFavorite?: boolean;
}

const CardProduct = ({
  id,
  photo,
  name,
  onFavorite,
  price,
  rating,
  sell,
  onClick,
  isFavorite = false,
  ...props
}: CardProductProps) => {
  /**
   * Handle add favorite product to wishlist
   * @param id
   * @param e Mouse event to prevent propagation
   */
  const handleClickFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    if (onFavorite) {
      onFavorite(id);
    }
  };

  /**
   * Handle click product and get id
   * @param id
   */
  const handleClick = (id: string) => {
    onClick(id);
  };

  return (
    <div
      className="group w-full h-card-product bg-white shadow-card cursor-pointer relative"
      onClick={handleClick.bind(null, id)}
    >
      <Image
        src={photo}
        alt={name}
        width={334}
        height={248}
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        blurDataURL={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMMbjYBwAEegH9Cl2DoAAAAABJRU5ErkJggg=='
        }
        className="w-full h-card-img"
        {...props}
      />

      <div className="absolute bg-dark opacity-50 w-full h-10 bottom-product-icon px-3 pt-1 group-hover:block hidden">
        <Image
          src={isFavorite ? '/heart-red.svg' : '/heart-white.svg'}
          alt="heart icon"
          width={32}
          height={32}
          className={clsx('float-right cursor-pointer', {
            'border border-red-500 p-1': isFavorite
          })}
          style={{ objectFit: 'cover' }}
          onClick={(e) => handleClickFavorite(id, e)}
          priority
        />
      </div>

      <div className="flex justify-between p-4">
        <div className="text-left">
          <p className="font-bold text-sm capitalize">{name}</p>
          <span className="text-dark-gray text-xs">{sell}</span>
          <div className="flex items-end gap-3">
            <Image
              src="/star.svg"
              alt="star"
              width={106}
              height={18}
              className="mt-2"
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className="text-xs text-gray-400">{`(${rating})`}</span>
          </div>
        </div>

        <p className="font-bold text-sm">{`${price}$`}</p>
      </div>
    </div>
  );
};

export default CardProduct;
