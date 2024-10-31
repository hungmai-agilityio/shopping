import { FONT_SIZE, FONT_WEIGHT, mada, TAG } from '@/constants';
import CardImage from '@/ui/components/Card/Image';
import { Typography } from '@/ui/components/common';
import { clsx } from 'clsx';

interface AboutInfoProps {
  desc: string;
  isReverse?: boolean;
  aboutName: string;
  src: string;
  title: string;
  styles?: string;
}

const AboutInfo = ({
  title,
  desc,
  aboutName,
  src,
  isReverse,
  styles
}: AboutInfoProps) => {
  return (
    <div
      className={clsx(
        'lg:flex block justify-between w-full gap-10',
        {
          'flex-row-reverse': isReverse
        },
        styles
      )}
    >
      <div className="lg:max-w-card-sm lg:text-left text-center">
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H2}
          size={FONT_SIZE.MEDIUM}
          className={`${mada.className} capitalize my-5`}
        >
          {title}
        </Typography>
        <Typography className="my-6 text-dark-md" size={FONT_SIZE.X_SMALL}>
          {desc}
        </Typography>
      </div>
      <div className="flex justify-center">
        <CardImage
          src={src}
          alt={aboutName}
          width={590}
          height={349}
          title={aboutName}
          isTitleLeft={isReverse}
          className="w-full h-96"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
