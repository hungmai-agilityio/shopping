import clsx from 'clsx';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  id?: string;
  isTD?: boolean;
  styles?: string;
}

export const Row = ({ children, id, isTD, styles }: IProps) => {
  return (
    <tr
      data-id={id}
      className={clsx(
        'capitalize',
        {
          'bg-gray-light': isTD
        },
        styles
      )}
    >
      {children}
    </tr>
  );
};
