'use client';

import { usePathname } from 'next/navigation';

// Components
import { NavItem } from '@/ui/components/common/Navbar/Item';

interface NavbarProps {
  items: Array<{ name: string; url?: string }>;
  styles?: string;
  closeMenu?: () => void;
}

const Navbar = ({ items, styles, closeMenu }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles}>
      {items.map((item, index) => (
        <NavItem
          key={index}
          name={item.name}
          url={item.url}
          isActive={pathname === item.url}
          onClick={closeMenu}
        />
      ))}
    </nav>
  );
};

export default Navbar;
