import type { FormUser } from '@features/register/schemas/RegisterSchema';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormSetError, UseFormSetValue } from 'react-hook-form';

export type UseRegisterFormArgs = {
  setError: UseFormSetError<FormUser>;
  setValue: UseFormSetValue<FormUser>;
  setPreviewAvatar: Dispatch<SetStateAction<string | null>>;
  previewAvatar: string | null;
};

export type RegisterArgs = {
  email: string;
  password: string;
  username: string;
  avatar: string | null;
};

export type AppErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'UNAUTHORIZED'
  | 'USER_ALREADY_EXISTS'
  | 'INVALID_DATA'
  | 'NETWORK_ERROR'
  | 'UNKNOWN_ERROR'
  | 'OVER_EMAIL_SENT_RATE_LIMIT'
  | 'EMAIL_ADDRESS_INVALID';

export type ApiError = {
  status: string | number;
  data: {
    code: AppErrorCode;
    message: string;
  };
};
