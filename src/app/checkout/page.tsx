import { Metadata } from 'next';

// Constants
import { END_POINT, FONT_SIZE, FONT_WEIGHT, mada, TAG } from '@/constants';

// Libs
import { fetchData } from '@/libs';

// Components
import { Hero, Typography } from '@/ui/components';

// Sections
import OrderSection from '@/ui/sections/Order';

export const metadata: Metadata = {
  title: 'Checkout'
};

const CheckoutPage = async () => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'Checkout', href: '' }
  ];

  const {data, error} = await fetchData({ endpoint: END_POINT.PRODUCTS });

  return (
    <>
      <Hero isBreadCrumb items={breadCrumb}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Typography
              fontWeight={FONT_WEIGHT.BOLD}
              color="text-white"
              tag={TAG.H1}
              className={`${mada.className} capitalize lg:text-5xl text-4xl mt-10 mb-6`}
            >
              Checkout
            </Typography>
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
          Unable to load order data, try again later
        </Typography>
      ) : (
        <OrderSection products={data} />
      )}
    </>
  );
};

export default CheckoutPage;
