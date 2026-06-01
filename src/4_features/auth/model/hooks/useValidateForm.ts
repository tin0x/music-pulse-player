import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { setUser } from '@entities/user/model/userSlice.ts';
import type { SubmitHandler } from 'react-hook-form';
import type { UserProfile, UseValidateFormArgs } from '@features/auth/types.ts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from '@features/auth/model/authSlice.ts';
import { createToken } from '@features/auth/lib/utils/createToken.ts';

export const useValidateForm = ({ reset, setPreviewAvatar, setValue, previewAvatar }: UseValidateFormArgs) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserProfile> = (data) => {
    const { username, email } = data;
    dispatch(setUser({ username, email, avatar: previewAvatar }));
    dispatch(setToken(createToken()));
    setPreviewAvatar(null);
    navigate('/', { replace: true });
    reset();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreviewAvatar(base64);
      setValue('avatar', base64);
    };
    reader.readAsDataURL(file);
  };

  const formError = {
    en: {
      username: 'Invalid username',
      email: 'Invalid email',
      password: 'Invalid password',
      repeatPassword: 'Invalid repeated password',
    },
    ua: {
      username: "Недійсне ім'я користувача",
      email: 'Недійсна електронна адреса',
      password: 'Невірний пароль',
      repeatPassword: 'Недійсний повторний пароль',
    },
  };

  return { onSubmit, handleFileChange, formError };
};
