'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Libs + store
import { postAvatar, getUserId, updateUser } from '@/libs';
import { useUserStore } from '@/stores';

// Constants
import { MESSAGE_API, MESSAGE_VALID, QUERY, STATUS, VALID_IMAGE } from '@/constants';

// Interfaces
import { IUser } from '@/interfaces';

// Components
import { CardProfile, Spinner, ToastMessage } from '@/ui/components';

const CardUpload = () => {
  const [uploadImage, setUploadImage] = useState<string>('');
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const { user, setUser } = useUserStore();

  const { data, isLoading } = useQuery<IUser>({
    queryKey: [QUERY.USER],
    queryFn: () => getUserId(user!.id),
    enabled: !!user
  });

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

      const response = await updateUser(user.id, updatedUser);

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

  const fullName = `${data?.firstName || ''} ${data?.lastName || ''}`.trim();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CardProfile
          photo={uploadImage || data?.avatar}
          useName={fullName}
          detail={<p className="text-dark-gray">{data?.email || ''}</p>}
          onButtonClick={handleAvatarUpdate}
        />
      )}
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default CardUpload;
