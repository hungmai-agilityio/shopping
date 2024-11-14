import clsx from 'clsx';
import { ReactNode } from 'react';

// Constants
import { CELL, cellSizeClasses, SIZE } from '@/constants';

interface IProps {
  children?: ReactNode;
  type: CELL.TD | CELL.TH;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  label?: string;
  styles?: string;
}

export const Cell = ({ children, type, size, label, styles }: IProps) => {
  const TagName = type;

  const sizeClass = cellSizeClasses[size || SIZE.SMALL];

  return (
    <TagName
      className={clsx(
        'flex justify-between items-center gap-3 lg:text-2xl text-md lg:table-cell w-full p-3 border-b',
        sizeClass,
        styles
      )}
    >
      <span className="lg:hidden font-semibold mr-2">{label}</span>
      {children}
    </TagName>
  );
};
