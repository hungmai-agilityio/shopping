import { Metadata } from 'next';

// Constants
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';

// Libs
import { getProducts, getUserFromCookie } from '@/libs';

// Components
import { Heading, Hero, Typography } from '@/ui/components';

// Sections
import CartSection from '@/ui/sections/Cart';

export const metadata: Metadata = {
  title: 'Cart'
};

const CartPage = async () => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '' }
  ];

  const { data, error } = await getProducts();
  const user = await getUserFromCookie();

  return (
    <>
      <Hero isBreadCrumb items={breadCrumb}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Heading>Cart</Heading>
            <Typography
              color="text-white"
              className="my-8"
              size={FONT_SIZE.X_SMALL}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </Typography>
          </div>
        </div>
      </Hero>
      {error ? (
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          color="text-red-500"
          className="text-center py-20"
        >
          Unable to load cart data, try again later
        </Typography>
      ) : (
        <CartSection productData={data!} user={user} />
      )}
    </>
  );
};

export default CartPage;
