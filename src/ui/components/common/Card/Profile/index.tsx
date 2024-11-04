'use client';

import React, { useState, ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Components
import { Button, CardImage } from '@/ui/components';

interface CardProfileProps {
  useName: string;
  photo?: string | StaticImport;
  detail?: ReactNode;
  onButtonClick?: (file?: File) => void;
}

const CardProfile = ({
  photo,
  useName,
  detail,
  onButtonClick
}: CardProfileProps) => {
  const defaultAvatar = '/user.svg';
  const [avatar, setAvatar] = useState<string | StaticImport>(
    photo || defaultAvatar
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newAvatarURL = URL.createObjectURL(file);
      setAvatar(newAvatarURL);
      setSelectedFile(file);
    }
  };

  // Handle click button to update
  const handleUpdateClick = () => {
    if (onButtonClick) {
      onButtonClick(selectedFile!);
    }
  };

  return (
    <div className="w-card-md h-card-md bg-white shadow-card flex flex-col items-center justify-center p-4">
      <div className="relative group w-40 h-40">
        <CardImage
          src={avatar}
          alt={useName}
          fill={true}
          autoSize
          className="rounded-full bg-gray-300 cursor-pointer"
          isBlur
          priority={true}
        />
        <label
          htmlFor="upload-image"
          className="absolute bg-second rounded-full opacity-60 w-6 h-6 left-avatar top-avatar justify-center group-hover:flex hidden cursor-pointer"
        >
          <Image src="/add.svg" alt="add icon" fill className="p-1" priority />
        </label>
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <p className="font-semibold text-lg mt-2 my-4">{useName}</p>
      {detail && <div className="text-gray-500 text-sm mb-4">{detail}</div>}
      <Button onClick={handleUpdateClick}>Update</Button>
    </div>
  );
};

export default CardProfile;
