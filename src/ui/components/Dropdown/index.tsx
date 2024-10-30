'use client';

import { ReactNode, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { Icon } from '@/ui/components/common';
import { useOutsideClick } from '@/hooks';

interface DropdownProps {
  children: ReactNode;
  styles?: string;
  setIsNoteVisible?: (visible: boolean) => void;
  isNoteVisible?: boolean;
}
const Dropdown = ({
  children,
  styles,
  setIsNoteVisible,
  isNoteVisible
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNoteVisibility = () =>
    setIsNoteVisible && setIsNoteVisible(!isNoteVisible);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsNoteVisible && setIsNoteVisible(false)
  });

  return (
    <div ref={dropdownRef}>
      <div
        className={clsx('flex gap-5 items-center', styles)}
        onClick={toggleNoteVisibility}
      >
        <p className="text-second text-lg font-bold cursor-pointer lowercase">
          products notes
        </p>
        <Icon src="/arrow.svg" alt="arrow icon" width={24} height={24} />
      </div>
      {isNoteVisible && children}
    </div>
  );
};

export default Dropdown;
