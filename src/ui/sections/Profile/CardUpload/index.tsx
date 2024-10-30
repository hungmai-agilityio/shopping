'use client';

import { useEffect, useState } from 'react';

// Libs
import { useUserStore, updateData, postAvatar } from '@/libs';

// Constants
import {
  END_POINT,
  MESSAGE_API,
  MESSAGE_VALID,
  STATUS,
  VALID_IMAGE
} from '@/constants';

// Interfaces
import { IUser } from '@/interfaces';

// Components
import { CardProfile, ToastMessage } from '@/ui/components';

const CardUpload = () => {
  const [uploadImage, setUploadImage] = useState<string>('');
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (user) {
      setUploadImage(user.avatar || '');
    }
  }, [user]);

  if (!user) return null;

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

      const response = await updateData({
        endpoint: END_POINT.USERS,
        id: user.id,
        data: updatedUser
      });

      if (response.data) {
        setUser(updatedUser);
        setUploadImage(imageUrl);

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

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();

  return (
    <>
      <CardProfile
        photo={uploadImage || user.avatar}
        useName={fullName}
        detail={<p className="text-dark-gray">{user.email || ''}</p>}
        onButtonClick={handleAvatarUpdate}
      />
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default CardUpload;
