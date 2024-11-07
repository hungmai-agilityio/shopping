'use client';

import { useState } from 'react';

// Libs + store
import { postAvatar, updateUser } from '@/libs';
import { useUserStore } from '@/stores';

// Constants
import {
  MESSAGE_API,
  MESSAGE_VALID,
  QUERY,
  STATUS,
  VALID_IMAGE
} from '@/constants';

// Interfaces
import { IUser } from '@/interfaces';

// Components
import { CardProfile, ToastMessage } from '@/ui/components';

interface CardUploadProps {
  user: IUser;
}

const CardUpload = ({ user }: CardUploadProps) => {
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const { setUser } = useUserStore();

  const handleAvatarUpdate = async (file?: File) => {
    if (file) {
      if (!VALID_IMAGE.includes(file.type)) {
        setToast({
          status: STATUS.ERROR,
          message: MESSAGE_VALID.UPLOAD
        });

        return;
      }
      const imageUrl = await postAvatar(file);

      if (!imageUrl) {
        setToast({
          status: STATUS.ERROR,
          message: MESSAGE_API.UPDATE_PROFILE_ERROR
        });
        return;
      }

      const updatedUser: IUser = {
        ...user,
        avatar: imageUrl,
        updated_at: new Date().toISOString()
      };

      const response = await updateUser(user.id, updatedUser);

      if (response.data) {
        setUser(updatedUser);

        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.UPDATE_PROFILE_SUCCESS
        });
        return;
      }
      setToast({
        status: STATUS.ERROR,
        message: MESSAGE_API.UPDATE_PROFILE_ERROR
      });
    }
  };
  const fullName = `${user?.firstName} ${user?.lastName}`.trim();

  return (
    <>
      <CardProfile
        photo={user?.avatar}
        useName={fullName}
        detail={<p className="text-dark-gray">{user?.email}</p>}
        onButtonClick={handleAvatarUpdate}
      />
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default CardUpload;
