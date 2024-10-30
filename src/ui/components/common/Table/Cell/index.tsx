import clsx from 'clsx';
import { ReactNode } from 'react';

// Constants
import { CELL, SIZE } from '@/constants';

interface IProps {
  children?: ReactNode;
  type: CELL.TD | CELL.TH;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  styles?: string;
}

export const Cell = ({ children, type, size, styles }: IProps) => {
  const TagName = type;

  const sizeClasses = {
    [SIZE.SMALL]: 'w-tb-sm',
    [SIZE.MEDIUM]: 'w-tb-md',
    [SIZE.LARGE]: 'w-tb-xl'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];

  return (
    <TagName
      className={clsx('lg:text-2xl md:text-lg text-xs p-3', sizeClass, styles)}
    >
      {children}
    </TagName>
  );
};
