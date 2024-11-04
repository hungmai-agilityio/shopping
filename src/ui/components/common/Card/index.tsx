import Image from 'next/image';
import clsx from 'clsx';

// Constants
import { FONT_SIZE, FONT_WEIGHT, popping, TYPE } from '@/constants';

// Components
import { Typography } from '@/ui/components';

interface CardProps {
  photo: string;
  name: string;
  variant: TYPE.COMMENT | TYPE.CONTACT;
  role?: string;
  comment?: string;
  desc?: string;
  mail?: string;
  phone?: string;
  width?: number;
  height?: number;
}

const Card = ({
  photo,
  name,
  variant,
  role,
  comment,
  desc,
  mail,
  width = 32,
  height = 32,
  phone
}: CardProps) => {
  return (
    <div
      className={`${popping.className} bg-white shadow-card p-10 w-card-sm h-card-sm overflow-hidden relative`}
    >
      {variant === TYPE.COMMENT && (
        <span className="absolute top-0 right-0 w-0 h-0 border-t-md border-l-md border-t-gray-100 border-l-transparent"></span>
      )}

      <div
        className={clsx('flex gap-4', {
          block: variant !== TYPE.COMMENT
        })}
      >
        <Image
          src={photo}
          alt={name}
          width={width}
          height={height}
          className={clsx('rounded-full w-12 h-12', {
            'p-1 bg-blue-700': variant === TYPE.CONTACT
          })}
          style={{ objectFit: 'cover' }}
        />
        <div>
          <p
            className={clsx('font-bold text-lg capitalize', {
              'mt-5': variant === TYPE.CONTACT
            })}
          >
            {name}
          </p>
          {variant === TYPE.COMMENT && role && (
            <span className="text-gray-500 capitalize mt-1 text-sm">
              {role}
            </span>
          )}
        </div>
      </div>
      {variant === TYPE.COMMENT && comment && (
        <>
          <Image
            src="/star.svg"
            alt="star"
            width={152}
            height={24}
            className="mt-5"
            style={{ objectFit: 'cover' }}
          />
          <Typography
            fontWeight={FONT_WEIGHT.THIN}
            size={FONT_SIZE.MIMI}
            className="mt-5"
          >
            " {comment} "
          </Typography>
        </>
      )}
      {variant === TYPE.CONTACT && (
        <>
          {desc && (
            <Typography
              fontWeight={FONT_WEIGHT.THIN}
              size={FONT_SIZE.MIMI}
              color="text-gray-400"
              className="mt-4"
            >
              {desc}
            </Typography>
          )}
          {mail && (
            <Typography
              fontWeight={FONT_WEIGHT.THIN}
              size={FONT_SIZE.MIMI}
              color="text-gray-400"
              className="mt-4"
            >
              {mail}
            </Typography>
          )}
          {phone && (
            <Typography
              fontWeight={FONT_WEIGHT.THIN}
              size={FONT_SIZE.MIMI}
              color="text-gray-400"
              className="mt-4"
            >
              {phone}
            </Typography>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
