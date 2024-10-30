import { Suspense } from 'react';
import { Metadata } from 'next';

// Constants
import { END_POINT, FONT_WEIGHT, popping, TAG } from '@/constants';

// Interfaces
import { IProduct } from '@/interfaces';

// Libs
import { fetchDataId } from '@/libs';

// Components
import { BreadCrumb, CardProductSkeleton, Typography } from '@/ui/components';

// Sections
import { ProductList, ProductDetail, Description } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Product Detail'
};

interface Params {
  id: string;
}

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const product: IProduct = await fetchDataId({
    endpoint: `${END_POINT.PRODUCTS}/`,
    id: id
  });
  const queryCategory = product.category ? `?category=${product.category}` : '';

  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: product.name, href: '' }
  ];

  return (
    <div className={`${popping.className} mt-10`}>
      <div className="container">
        <BreadCrumb items={breadCrumb} styles="my-10" />
        <ProductDetail product={product} />
      </div>
      <Description />
      <section className="my-20 container">
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H4}
          className="text-heading text-center"
        >
          Same Product
        </Typography>
        <div className="mt-10">
          <Suspense key={product.category} fallback={<CardProductSkeleton />}>
            <ProductList query={queryCategory} isShowMore />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
