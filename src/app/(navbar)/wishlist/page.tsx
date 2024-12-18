import { Metadata } from 'next';

// Constants
import { FONT_SIZE, FONT_WEIGHT, popping } from '@/constants';

// Components
import { Heading, Hero, Typography } from '@/ui/components';
import { getProducts, getUserFromCookie } from '@/libs';
import WishListSection from '@/ui/sections/Wishlist';

export const metadata: Metadata = {
  title: 'Whish list'
};

const WishListPage = async () => {
  const { data, error } = await getProducts();
  const user = await getUserFromCookie();

  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'Wishlist', href: '' }
  ];

  return (
    <div className={`${popping.className}`}>
      <Hero isBreadCrumb items={breadCrumb}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Heading>Wishlist</Heading>
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
          Unable to load wish list data, try again later
        </Typography>
      ) : (
        <WishListSection user={user} products={data} />
      )}
    </div>
  );
};

export default WishListPage;
