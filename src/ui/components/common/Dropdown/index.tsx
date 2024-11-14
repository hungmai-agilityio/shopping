'use client';

import { ReactNode, useRef } from 'react';
import { clsx } from 'clsx';

// Components
import { Icon } from '@/ui/components';

// Hooks
import { useOutsideClick } from '@/hooks';

export interface DropdownProps {
  children: ReactNode;
  styles?: string;
  setVisible: (visible: boolean) => void;
  isOpen?: boolean;
  label: string;
}
const Dropdown = ({
  children,
  styles,
  setVisible,
  isOpen,
  label
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => setVisible(!isOpen);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setVisible(false)
  });

  return (
    <div ref={dropdownRef}>
      <div
        className={clsx('flex gap-5 items-center', styles)}
        onClick={toggleVisibility}
      >
        <p className="text-second text-lg font-bold cursor-pointer lowercase">
          {label}
        </p>
        <Icon src="/arrow.svg" alt="arrow icon" width={24} height={24} />
      </div>
      {isOpen && children}
    </div>
  );
};

export default Dropdown;