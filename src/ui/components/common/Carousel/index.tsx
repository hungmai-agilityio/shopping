'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

// Components
import { CardImage, Icon } from '@/ui/components';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-slide-img h-slide-img">
      <div className="w-slide-img h-slide-img">
        <CardImage
          src={images[activeIndex]}
          alt={`Image ${activeIndex}`}
          autoSize
          style={{ objectFit: 'cover' }}
          className="rounded-tl-slide rounded-tr-slide rounded-br-slide border-8 border-white"
          isBlur
        />
      </div>

      <div className="absolute bottom-10 left-1/4 flex justify-center items-center gap-2 bg-dark bg-opacity-70 rounded-md">
        <div className="absolute -left-3">
          <Icon
            src="/arrow-b-left.svg"
            alt="icon arrow left"
            width={24}
            height={24}
            className="bg-second p-1 z-10"
            onClick={handlePrev}
            priority
          />
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={setActiveIndex.bind(null, index)}
            className={clsx('cursor-pointer relative w-16 h-16', {
              'opacity-50': index !== activeIndex
            })}
          >
            <CardImage
              autoSize
              src={image}
              isBlur
              alt={`Thumbnail ${index}`}
              className={clsx('object-cover', {
                'p-2': index !== activeIndex
              })}
            />
          </div>
        ))}
        <div className="absolute -right-3">
          <Icon
            src="/arrow-b-right.svg"
            alt="icon arrow right"
            width={24}
            height={24}
            className="bg-second p-1 z-10"
            onClick={handleNext}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
