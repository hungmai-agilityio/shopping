'use client';

import { useState } from 'react';
import Image from 'next/image';

// Components
import { Navbar, UserAction } from '@/ui/components';
import { IUser } from '@/interfaces';

interface BurgerProps {
  user: IUser;
  items: Array<{ name: string; url?: string }>;
}

const BurgerMenu = ({ user, items }: BurgerProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu function
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
        <Image src="/menu.svg" alt="menu" width={24} height={24} priority />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-6
          transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end mb-8">
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            priority
            onClick={toggleMenu}
          />
        </div>
        <Navbar
          items={items}
          styles="flex flex-col gap-6 text-2xl text-center"
          closeMenu={closeMenu}
        />
        <hr className="my-8" />
        <UserAction
          user={user}
          styles="flex justify-center gap-12 mt-12"
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
