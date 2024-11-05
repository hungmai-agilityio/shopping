import Image from 'next/image';

// Constants
import {
  END_POINT,
  FONT_SIZE,
  FONT_WEIGHT,
  mada,
  popping,
  slideImage,
  slideProducts,
  TYPE
} from '@/constants';

// Interfaces
import { IComments, ISearchProps } from '@/interfaces';

// Libs
import { checkUserLogged, getCategories, getComments } from '@/libs';

// Components
import {
  Brand,
  Button,
  Card,
  CardImage,
  Hero,
  CarouselProduct,
  Carousel,
  Typography,
  Heading,
  ButtonRedirect
} from '@/ui/components';

// Sections
import { CategorySection, ProductWrapper } from '@/ui/sections';

const HomePage = async ({ searchParams }: ISearchProps) => {
  const { data: categories, error: categoryError } = await getCategories();
  const { data: comments, error: commentsError } = await getComments();
  const isUser = await checkUserLogged();

  return (
    <div className={`${popping.className}`}>
      <Hero>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="my-36 lg:max-w-card-sm lg:text-left text-center">
            <Heading>get the latest dress models from us</Heading>
            <Typography
              color="text-gray-300"
              className="my-8 md:block hidden"
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
          <Brand src="/brand-2.svg" alt="brand-1" />
          <Brand src="/brand-3.svg" alt="brand-1" />
          <Brand src="/brand-4.svg" alt="brand-1" />
          <Brand src="/brand-5.svg" alt="brand-1" />
        </div>
      </section>
      <section className="my-20">
        {categoryError ? '' : <CategorySection categories={categories || []} />}
      </section>
      <section className="my-20 container">
        <ProductWrapper
          categories={categories || []}
          searchParams={searchParams!}
        />
      </section>
      <section className="md:flex hidden">
        <CarouselProduct products={slideProducts} />
      </section>
      {commentsError ? (
        ''
      ) : (
        <section className="my-20 container">
          <Typography
            fontWeight={FONT_WEIGHT.BOLD}
            className={`${mada.className} my-4 text-center`}
            size={FONT_SIZE.MEDIUM}
          >
            Testimonials
          </Typography>
          <div className="mt-8 xl:flex justify-center gap-6">
            {comments.map((item: IComments) => (
              <div key={item.id} className="w-full mt-4  flex justify-center">
                <Card
                  photo={item.avatar}
                  name={item.name}
                  variant={TYPE.COMMENT}
                  comment={item.comment}
                  width={48}
                  height={48}
                  role={item.role}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container my-20 md:flex justify-between">
        <div className="max-w-card-sm mb-5">
          <Typography
            fontWeight={FONT_WEIGHT.BOLD}
            className={`${mada.className} my-4`}
            size={FONT_SIZE.MEDIUM}
          >
            Look For Models Now
          </Typography>
          <Typography className="my-4" size={FONT_SIZE.X_SMALL}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
            ullamcorper.
          </Typography>

          <ButtonRedirect
            isLogged={isUser}
            name="Login"
            url={END_POINT.SIGN_IN}
          />
        </div>
        <CardImage
          src="/product.webp"
          alt="Product-demo"
          width={590}
          height={349}
        />
      </section>
    </div>
  );
};

export default HomePage;
