import useAuth from '@app/providers/auth/useAuth';
import { useUpdateUserInfoMutation } from '@features/update-user-info/api/userApi';
import type { ApiError } from '@features/update-user-info/types';
import React, { type RefObject } from 'react';

export const useChangeAvatar = (fileInputRef: RefObject<HTMLInputElement | null>) => {
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const { session } = useAuth();
  const userId = session?.user?.id;

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!userId) {
      console.error('No authenticated user found');
      return;
    }

    const file = e.target.files?.[0];
    const maxSize = 2 * 1024 * 1024;

    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > maxSize) return;

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      const base64 = fileReader.result as string;

      try {
        await updateUserInfo({ userId, avatar: base64 }).unwrap();
      } catch (error) {
        const errorInfo = error as ApiError;
        console.error(`${errorInfo.status} : ${errorInfo.data.code}`);
        return;
      }
    };
    fileReader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return { handleChangeAvatar, handleButtonClick, isLoading };
};
