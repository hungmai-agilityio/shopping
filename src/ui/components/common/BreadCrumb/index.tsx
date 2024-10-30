import Link from 'next/link';
import { clsx } from 'clsx';
import { memo } from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  styles?: string;
  separator?: string;
  color?: string;
}

const Breadcrumb = ({
  items,
  styles,
  color = 'text-black',
  separator = '/'
}: BreadcrumbProps) => {
  const totalItems = items.length;

  const displayedItems =
    totalItems > 3
      ? [
          items[0],
          { label: '...', href: '#' },
          items[totalItems - 2],
          items[totalItems - 1]
        ]
      : items;

  return (
    <nav
      aria-label="breadcrumb"
      className={clsx('flex items-center space-x-2', color, styles)}
    >
      {displayedItems.map((item, index) => (
        <span key={index} className="flex items-center">
          {index !== displayedItems.length - 1 ? (
            <>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
              <span className={clsx('mx-2', color)}>{separator}</span>
            </>
          ) : (
            <span className={clsx('font-bold', color)}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
