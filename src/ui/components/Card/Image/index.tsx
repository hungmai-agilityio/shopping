import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface CardImageProps extends ImageProps {
  title?: string;
  isTitleLeft?: boolean;
  autoSize?: boolean;
  isBlur?: boolean;
}
const CardImage = ({
  src,
  alt,
  width,
  height,
  title,
  isTitleLeft,
  autoSize,
  isBlur,
  ...props
}: CardImageProps) => {
  return (
    <div
      className={clsx('relative inline-flex items-center justify-center', {
        'w-full h-full': autoSize
      })}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={autoSize}
        style={{ objectFit: 'cover' }}
        placeholder={isBlur ? 'blur' : 'empty'}
        blurDataURL={
          isBlur
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMMbjYBwAEegH9Cl2DoAAAAABJRU5ErkJggg=='
            : undefined
        }
        {...props}
      />

      {title && (
        <div
          className={clsx(
            'absolute bg-white h-14 w-11/12 text-2xl font-bold text-purple-500 right-0 p-2 overflow-hidden truncate bottom-10',
            {
              'left-0 text-right': isTitleLeft
            }
          )}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default CardImage;
