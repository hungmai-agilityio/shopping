'use client';

import { useState } from 'react';
import Image from 'next/image';

// Components
import { Navbar } from '@/ui/components';
import dynamic from 'next/dynamic';

const UserAction = dynamic(() => import('@/ui/components/UserAction'), {
  ssr: false
});

interface BurgerProps {
  items: Array<{ name: string; url?: string }>;
}

const BurgerMenu = ({ items }: BurgerProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        />
        <hr className="my-8" />
        <UserAction styles="flex justify-center gap-12 mt-12" />
      </div>
    </div>
  );
};

export default BurgerMenu;