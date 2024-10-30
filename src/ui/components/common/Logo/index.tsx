import Link from 'next/link';
import Image, { ImageProps } from 'next/image';

// Components
import Typography from '@/ui/components/common/Typography';

// Constants
import { FONT_SIZE, FONT_WEIGHT, roboto } from '@/constants';

interface LogoProps extends ImageProps {
  url?: string;
  title?: string;
  color?: string;
}

const Logo = ({
  src,
  alt,
  width,
  height,
  title,
  color,
  url = '/'
}: LogoProps) => {
  return (
    <Link
      href={url}
      className={`${roboto.className} cursor-pointer flex items-center gap-2`}
    >
      <Image
        src={src}
        alt={`logo ${alt}`}
        width={width}
        height={height}
        priority
      />

      <Typography
        color={color}
        fontWeight={FONT_WEIGHT.BOLD}
        size={FONT_SIZE.MIMI}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default Logo;
