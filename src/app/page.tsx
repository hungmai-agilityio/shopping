import Image from 'next/image';
import { Suspense } from 'react';

// Constants
import {
  FONT_SIZE,
  FONT_WEIGHT,
  mada,
  popping,
  slideImage,
  slideProducts,
  TYPE
} from '@/constants';

// Interfaces
import { ISearchProps } from '@/interfaces';

// Components
import {
  Brand,
  Button,
  Hero,
  CarouselProduct,
  Carousel,
  Typography,
  Heading,
  CardSkeleton
} from '@/ui/components';

// Sections
import {
  CategorySection,
  ProductWrapper,
  CommentsSection,
  ModelSection
} from '@/ui/sections';

const HomePage = async ({ searchParams }: ISearchProps) => {
  return (
    <div className={`${popping.className}`}>
      <Hero>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="my-36 lg:max-w-card-sm lg:text-left text-center">
            <Heading>get the latest dress models from us</Heading>
            <Typography
              color="text-gray-300"
              className="my-8 md:block hidden "
              size={FONT_SIZE.X_SMALL}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </Typography>

            <Button variant={TYPE.SECOND}>Shop Now</Button>
          </div>
          <div className="lg:flex hidden gap-20 relative">
            <div className="text-center xl:block hidden">
              <Typography
                fontWeight={FONT_WEIGHT.BOLD}
                color="text-white"
                className={`${mada.className} my-4`}
                size={FONT_SIZE.X_SMALL}
              >
                More list
              </Typography>
              <div className="w-44">
                <Image
                  src="/suit-1.webp"
                  alt="suit-adv"
                  width={173}
                  height={268}
                  priority
                />
                <Image
                  src="/suit-2.webp"
                  alt="suit-adv"
                  width={173}
                  height={268}
                  priority
                />
              </div>
            </div>
            <Image
              src="/dot-icon.svg"
              alt="suit-adv"
              width={12}
              height={44}
              priority
              className="absolute top-40 left-52 xl:block hidden"
            />
            <Carousel images={slideImage} />
          </div>
        </div>
      </Hero>
      <section className="md:block hidden bg-gray-light h-28">
        <div className="container flex items-center justify-between p-5 gap-5">
          <Brand src="/brand-1.svg" alt="brand-1" />
          <Brand src="/brand-2.svg" alt="brand-2" />
          <Brand src="/brand-3.svg" alt="brand-3" />
          <Brand src="/brand-4.svg" alt="brand-4" />
          <Brand src="/brand-5.svg" alt="brand-5" />
        </div>
      </section>
      <CategorySection />
      <section className="my-20 container">
        <ProductWrapper searchParams={searchParams!} />
      </section>
      <section className="md:flex hidden">
        <CarouselProduct products={slideProducts} />
      </section>
      <Suspense fallback={<CardSkeleton quantity={2} />}>
        <CommentsSection />
      </Suspense>
      <ModelSection />
    </div>
  );
};

export default HomePage;
