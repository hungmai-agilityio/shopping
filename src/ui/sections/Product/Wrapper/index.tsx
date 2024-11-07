import { Suspense } from 'react';

// Interfaces
import { ICategories, IUser } from '@/interfaces';
import { ISearchParams } from '@/types';

// Constants
import { FONT_SIZE, FONT_WEIGHT, mada } from '@/constants';

// Components
import { CardProductSkeleton, Category, Typography } from '@/ui/components';

// Sections
import { ProductSection } from '@/ui/sections';

interface ProductSectionProps {
  categories: ICategories[];
  searchParams: ISearchParams;
  user: IUser;
}
const ProductWrapper = async ({
  categories,
  searchParams,
  user
}: ProductSectionProps) => {
  const data = categories.map((item) => item.title);
  const query = searchParams?.['product-query'] ?? '';
  const queryCategory = query ? `?category=${query}` : '';

  return (
    <div className="text-center my-8">
      <Typography
        color="text-second"
        size={FONT_SIZE.X_SMALL}
        className="uppercase"
      >
        choose from the best products
      </Typography>
      <Typography
        fontWeight={FONT_WEIGHT.BOLD}
        className={`${mada.className} capitalize lg:text-5xl text-4xl my-5`}
      >
        our best seller product
      </Typography>
      <Category categories={data} queryParam="product-query" />
      <Suspense key={query} fallback={<CardProductSkeleton />}>
        <ProductSection query={queryCategory} user={user} />
      </Suspense>
    </div>
  );
};

export default ProductWrapper;
