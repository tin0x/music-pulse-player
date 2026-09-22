import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { useUpdateUserInfoMutation } from '@features/update-user-info/api/userApi';
import type { ApiError } from '@features/update-user-info/types';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { showToast } from '@shared/lib/slices/toast/model/toastSlice';
import React, { type RefObject } from 'react';

const errorMessages = {
  en: {
    auth: 'No authenticated user found',
    fileType: 'The avatar must be an image.',
    fileSize: 'The avatar size must not exceed 2 MB.',
  },
  ua: {
    auth: 'Не знайдено автентифікованого користувача',
    fileType: 'Аватар має бути зображенням.',
    fileSize: 'Розмір аватара не повинен перевищувати 2 МБ.',
  },
};

const successMessage = {
  en: 'Your avatar has been successfully changed.',
  ua: 'Ваш аватар успішно змінено.',
};

export const useChangeAvatar = (fileInputRef: RefObject<HTMLInputElement | null>) => {
  const dispatch = useAppDispatch();
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
  const { currentLanguage } = useLanguage();

  const { session } = useAuth();
  const userId = session?.user?.id;

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!userId) {
      dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage].auth }));
      console.error('No authenticated user found');
      return;
    }

    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage].fileType }));
      console.error('The avatar must be an image.');
      return;
    }

    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {
      dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage].fileSize }));
      console.error('The avatar size must not exceed 2 MB.');
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      const base64 = fileReader.result as string;

      try {
        await updateUserInfo({ userId, avatar: base64 }).unwrap();
        dispatch(showToast({ eventType: 'success', customMessage: successMessage[currentLanguage] }));
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
