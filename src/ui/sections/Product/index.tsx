// Libs
import { getProducts, getUserFromCookie } from '@/libs';

// Components
import { Typography } from '@/ui/components';

//Sections
import CardProductList from '@/ui/sections/Product/List';

interface ProductListProps {
  query?: string;
  isShowMore?: boolean;
}
const ProductSection = async ({ query, isShowMore }: ProductListProps) => {
  const param = query ? query : '';

  const user = await getUserFromCookie();
  const { data, error } = await getProducts(param);

  return (
    <>
      {error ? (
        <Typography color="text-red-500" className="text-center">
          Unable to load products! Try later
        </Typography>
      ) : (
        <CardProductList products={data!} isShowMore={isShowMore} user={user} />
      )}
    </>
  );
};

export default ProductSection;
