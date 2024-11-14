import { ReactNode } from 'react';
import { clsx } from 'clsx';

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
        'lg:table-row flex flex-col border lg:border-none mb-4',
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
