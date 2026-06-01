import React, { type RefObject } from 'react';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { setUser } from '@entities/user/model/userSlice.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getUser } from '@entities/user/model/selectors.ts';

export const useChangeAvatar = (fileInputRef: RefObject<HTMLInputElement | null>) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getUser);

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement | null>) => {
    const file = e.target.files?.[0];
    const maxSize = 2 * 1024 * 1024;

    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > maxSize) return;
    if (!currentUser) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const base64 = fileReader.result as string;
      dispatch(setUser({ ...currentUser, avatar: base64 }));
    };
    fileReader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return { handleChangeAvatar, handleButtonClick };
};
