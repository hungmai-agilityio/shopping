import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface IconProps extends ImageProps {
  onClick?: () => void;
  isDisabled?: boolean;
}

const Icon = ({
  src,
  alt,
  width,
  height,
  onClick,
  isDisabled,
  ...props
}: IconProps) => {
  return (
    <div
      className={clsx('relative inline-flex items-center justify-center', {
        'opacity-20': isDisabled,
        'cursor-pointer': onClick
      })}
      onClick={onClick}
    >
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </div>
  );
};

export default Icon;
