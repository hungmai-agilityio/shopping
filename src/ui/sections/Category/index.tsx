// Constants
import { FONT_SIZE, FONT_WEIGHT, mada, popping } from '@/constants';

import { getCategories } from '@/libs';

// Components
import { CarouselCategories, Typography } from '@/ui/components';

const CategorySection = async () => {
  const { data: categories, error: categoryError } = await getCategories();

  return (
    <section className="my-20">
      {categoryError ? (
        ''
      ) : (
        <div className={`${popping.className} xl:flex`}>
          <div className="container max-w-card-sm">
            <div className="md:-ml-24 mb-5">
              <Typography
                color="text-second"
                size={FONT_SIZE.X_SMALL}
                className="uppercase"
              >
                choose your category
              </Typography>
              <Typography
                fontWeight={FONT_WEIGHT.BOLD}
                className={`${mada.className} capitalize lg:text-5xl text-4xl my-5`}
              >
                categories style
              </Typography>
              <Typography size={FONT_SIZE.X_SMALL} color="text-dark-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </Typography>
            </div>
          </div>
          <div className="lg:mt-0 mt-14 flex justify-end md:mx-0 mx-10">
            <CarouselCategories categories={categories} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
