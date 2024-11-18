'use client';

import { useState } from 'react';

// Constants
import { signika } from '@/constants';

// Components
import { CardImage, Icon } from '@/ui/components';

// Interfaces
import { ICategories } from '@/interfaces';

interface CarouselCategoriesProps {
  categories: ICategories[];
}

const CarouselCategories = ({ categories }: CarouselCategoriesProps) => {
  const [active, setActive] = useState<number>(0);

  const handlePrev = () => {
    setActive((prevIndex) =>
      !prevIndex ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActive((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${signika} flex gap-4`}>
      <div className="relative flex justify-start items-center">
        <div className="absolute -left-5">
          <Icon
            src="/arrow-b-left.svg"
            alt="icon arrow left"
            width={40}
            height={40}
            className="bg-second p-1 z-10"
            onClick={handlePrev}
            priority
          />
        </div>
        <CardImage
          src={categories[active].image}
          alt={categories[active].title}
          width={360}
          height={230}
          className="transition-transform duration-300 ease-in-out w-slide-sm h-slide-sm"
          isBlur
        />
        <div className="absolute -right-5">
          <Icon
            src="/arrow-b-right.svg"
            alt="icon arrow right"
            width={40}
            height={40}
            className="bg-second p-1 z-10"
            onClick={handleNext}
            priority
          />
        </div>
        <p className="capitalize font-semibold absolute top-3 right-5 bg-second text-white px-3 py-1">
          {categories[active].title}
        </p>
      </div>
      <div className="flex items-center justify-center ml-4">
        {categories.map(
          (product, index) =>
            index === (active + 1) % categories.length && (
              <div
                key={product.id}
                className="transition-all duration-300 ease-in-out mb-2 relative"
                onClick={setActive.bind(null, index)}
              >
                <CardImage
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={130}
                  className="cursor-pointer w-52 h-32"
                  isBlur
                />
                <p className="capitalize font-medium absolute top-3 right-2 text-sm bg-second text-white px-3 py-1">
                  {categories[index].title}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CarouselCategories;
