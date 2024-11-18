import dynamic from 'next/dynamic';

// Constants
import { END_POINT, FONT_SIZE, FONT_WEIGHT, mada } from '@/constants';

// Components
import { CardImage, Typography } from '@/ui/components';
const ButtonRedirect = dynamic(
  () => import('@/ui/components/UserAction/Redirect'),
  {
    ssr: false
  }
);

const ModelSection = () => {
  return (
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

        <ButtonRedirect name="Login" url={END_POINT.SIGN_IN} />
      </div>
      <CardImage
        src="/product.webp"
        alt="Product-demo"
        width={590}
        height={349}
      />
    </section>
  );
};

export default ModelSection;
