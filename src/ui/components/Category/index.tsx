'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';

// Constants
import { mada } from '@/constants';

interface CategoryProps {
  categories: string[];
  queryParam: string;
}

export const Category = ({ categories, queryParam }: CategoryProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const initCategory = searchParams.get(queryParam) || '';

  const [currentCategory, setCurrentCategory] = useState<string>(initCategory);

  // Update category and URL when a new category is selected
  const handleCategorySelect = (category: string) => {
    params.set(queryParam, category);
    push(`?${params.toString()}`, { scroll: false });
    setCurrentCategory(category);
  };

  return (
    <>
      <ul
        className={`${mada.className} my-5 flex xl:gap-10 gap-5 justify-center text-dark`}
      >
        {categories.map((category, index) => (
          <li
            className={clsx(
              'relative capitalize cursor-pointer hover:text-second',
              {
                'text-second font-bold': currentCategory === category
              }
            )}
            key={index}
            onClick={handleCategorySelect.bind(null, category)}
          >
            {category}
            {currentCategory === category && (
              <span className="absolute left-0 right-0 -bottom-2 mx-auto h-line w-full bg-active"></span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
