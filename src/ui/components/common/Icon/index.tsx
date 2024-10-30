import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface IconProps extends ImageProps {
  isBadge?: boolean;
  badgeCount?: number;
  onClick?: () => void;
  isDisabled?: boolean;
}
const Icon = ({
  src,
  alt,
  width,
  height,
  isBadge,
  badgeCount,
  onClick,
  isDisabled,
  ...props
}: IconProps) => {
  return (
    <button
      className={clsx('relative inline-flex items-center justify-center', {
        'opacity-20': isDisabled
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Image src={src} alt={alt} width={width} height={height} {...props} />
      {isBadge && (
        <span
          className={clsx(
            'absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-400 text-white text-xs font-bold flex items-center justify-center',
            badgeCount === 0 && 'hidden'
          )}
        >
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export default Icon;
