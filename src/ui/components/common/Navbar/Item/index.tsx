import { clsx } from 'clsx';
import Link from 'next/link';

// Constant
import { mada } from '@/constants';

interface NavItemProps {
  name: string;
  url?: string;
  isActive?: boolean;
}

export const NavItem = ({ name, url, isActive = false }: NavItemProps) => {
  return (
    <div className="relative">
      <Link
        href={url || '#'}
        className={clsx(`${mada.className}  lg:text-lg text-base capitalize`, {
          'text-active font-bold': isActive
        })}
      >
        {name}
      </Link>
      {isActive && (
        <span className="absolute left-0 right-0 -bottom-2 mx-auto h-1 w-1 bg-active rounded-full"></span>
      )}
    </div>
  );
};
