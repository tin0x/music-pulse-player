import { useRegisterMutation } from '@features/register/api/authApi';
import type { FormUser } from '@features/register/schemas/RegisterSchema';
import type { ApiError, UseRegisterFormArgs } from '@features/register/types';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useRegisterForm = ({ setPreviewAvatar, setValue, setError }: UseRegisterFormArgs) => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormUser> = async (data) => {
    const { email, password, username, avatar } = data;
    try {
      await register({ email, password, username, avatar: avatar || null }).unwrap();
      navigate('/', { replace: true });
    } catch (error) {
      const apiError = error as ApiError;
      setError('root.serverError', {
        type: 'server',
        message: apiError.data.message,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('avatar', {
        type: 'validate',
        message: 'The avatar must be an image.',
      });
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('avatar', {
        type: 'validate',
        message: 'This image exceeds the 2 MB size limit.',
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreviewAvatar(base64);
      setValue('avatar', base64, { shouldValidate: true });
    };
    reader.readAsDataURL(file);
  };

  const formError = {
    en: {
      username: 'Invalid username',
      email: 'Invalid email',
      password: 'Invalid password',
      repeatPassword: 'Invalid repeated password',
      avatar: 'The avatar must be an image, and the image size must not exceed the 2 MB limit.',
    },
    ua: {
      username: "Недійсне ім'я користувача",
      email: 'Недійсна електронна адреса',
      password: 'Невірний пароль',
      repeatPassword: 'Недійсний повторний пароль',
      avatar: 'Аватар має бути зображенням, а розмір зображення не повинен перевищувати ліміт у 2 МБ.',
    },
  };

  return { onSubmit, handleFileChange, formError, isLoading };
};
