// Constants
import { FONT_SIZE, FONT_WEIGHT, mada, popping } from '@/constants';

// Interfaces
import { ICategories } from '@/interfaces';

// Components
import { CarouselCategories, Typography } from '@/ui/components';

interface CategoryProps {
  categories: ICategories[];
}

const CategorySection = ({ categories }: CategoryProps) => {
  return (
    <div className={`${popping.className} xl:flex justify-between items-start`}>
      <div className="container max-w-card-sm">
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
      <div className="lg:mt-0 mt-14 flex justify-end">
        <CarouselCategories categories={categories} />
      </div>
    </div>
  );
};

export default CategorySection;
