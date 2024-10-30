// Constants
import { END_POINT } from '@/constants';

// Libs
import { fetchData } from '@/libs';

// Components
import { Typography } from '@/ui/components';

//Sections
import CardProductList from '@/ui/sections/Product/Card';

interface ProductListProps {
  query?: string;
  isShowMore?: boolean;
}
const ProductList = async ({ query, isShowMore }: ProductListProps) => {
  const param = query ? query : '';

  const { data, error } = await fetchData({
    endpoint: `${END_POINT.PRODUCTS}${param}`
  });

  return (
    <>
      {error ? (
        <Typography color="text-red-500" className="text-center">
          Unable to load products! Try later
        </Typography>
      ) : (
        <CardProductList products={data} isShowMore={isShowMore} />
      )}
    </>
  );
};

export default ProductList;
