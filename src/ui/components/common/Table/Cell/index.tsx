import clsx from 'clsx';
import { ReactNode } from 'react';

// Constants
import { CELL, cellSizeClasses, SIZE } from '@/constants';

interface IProps {
  children?: ReactNode;
  type: CELL.TD | CELL.TH;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  styles?: string;
}

export const Cell = ({ children, type, size, styles }: IProps) => {
  const TagName = type;

  const sizeClass = cellSizeClasses[size || SIZE.SMALL];

  return (
    <TagName
      className={clsx('lg:text-2xl md:text-lg text-xs p-3', sizeClass, styles)}
    >
      {children}
    </TagName>
  );
};
