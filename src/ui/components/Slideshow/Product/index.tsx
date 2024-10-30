'use client';

import { useState } from 'react';
import Image from 'next/image';

// Constants
import { FONT_SIZE, FONT_WEIGHT, mada, popping, TAG, TYPE } from '@/constants';

// Interfaces
import { IProduct } from '@/interfaces';

// Components
import CardImage from '@/ui/components/Card/Image';
import { Button, Icon, Typography, ColorPicker } from '@/ui/components/common';

interface SlideProductProps {
  products: IProduct[];
  onOrder?: () => void;
}

const SlideProduct = ({ products, onOrder }: SlideProductProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div
      className={`${popping.className} w-full h-full bg-gradient-primary lg:flex block justify-between py-20 pr-32`}
    >
      <div className="flex flex-1">
        <div className="w-full flex items-center justify-center">
          {products.map(
            (product, index) =>
              index === (currentIndex + 1) % products.length && (
                <div
                  key={product.id}
                  className="transition-all duration-300 ease-in-out mb-2 relative"
                  onClick={setCurrentIndex.bind(null, index)}
                >
                  <CardImage
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={130}
                    className="cursor-pointer w-52 h-32"
                    isBlur
                  />
                  <Image
                    src="/ellipse.svg"
                    alt="icon Ellipse"
                    width={321}
                    height={21}
                    className="absolute -left-1 mt-5"
                  />
                </div>
              )
          )}
          <div className="relative w-card-sm flex items-center justify-center">
            <div className="absolute left-10">
              <Icon
                src="/arrow-left.svg"
                alt="icon arrow left"
                width={40}
                height={40}
                className="bg-white p-1 z-10"
                priority
                onClick={handlePrev}
              />
            </div>
            <div className="mt-5">
              <CardImage
                src={currentProduct.image}
                alt={currentProduct.name}
                width={314}
                height={428}
                className="transition-transform duration-300 ease-in-out w-slide-sm h-slide-img-md"
                isBlur
              />
              <Image
                src="/ellipse.svg"
                alt="icon Ellipse"
                width={314}
                height={21}
                className="mx-auto mt-5"
              />
            </div>

            <div className="absolute right-10">
              <Icon
                src="/arrow-right.svg"
                alt="icon arrow right"
                width={40}
                height={40}
                className="bg-white p-1 z-10"
                priority
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 ml-10 flex flex-col justify-center max-w-card-sm">
        <Typography
          color="text-white"
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H2}
          className={`${mada.className} lg:text-5xl text-4xl`}
        >
          {currentProduct.name}
        </Typography>

        <div className="flex justify-between">
          <ColorPicker
            isTitle
            colors={currentProduct.colors}
            titleColor="text-white"
          />
          {currentProduct.rating && (
            <div className="ml-4 flex items-center">
              <Icon src="star.svg" alt="rating" width={152} height={24} />
              <Typography
                color="text-white"
                fontWeight={FONT_WEIGHT.THIN}
                tag={TAG.SPAN}
                size={FONT_SIZE.MIMI}
              >
                ( {currentProduct.rating} )
              </Typography>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="mb-6">
            <Typography
              color="text-white"
              fontWeight={FONT_WEIGHT.BOLD}
              tag={TAG.SPAN}
              size={FONT_SIZE.X_SMALL}
            >
              Size
            </Typography>
            <div className="flex gap-4 mt-2">
              {currentProduct.sizes.map((size, index) => (
                <Button
                  key={index}
                  className="w-6 h-6 bg-white rounded-full drop-shadow-lg text-sm focus:text-second focus:font-bold"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <Typography
            color="text-white"
            fontWeight={FONT_WEIGHT.SEMIBOLD}
            tag={TAG.SPAN}
            className={`${mada.className} lg:text-5xl text-4xl`}
          >
            {currentProduct.price}$
          </Typography>
        </div>

        {currentProduct.description && (
          <Typography
            color="text-gray-200"
            fontWeight={FONT_WEIGHT.THIN}
            size={FONT_SIZE.MIMI}
            className="my-5"
          >
            {currentProduct.description}
          </Typography>
        )}
        <Button variant={TYPE.SECOND} onClick={onOrder}>
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default SlideProduct;
