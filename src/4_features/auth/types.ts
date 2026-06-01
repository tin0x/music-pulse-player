import type { UseFormReset, UseFormSetValue } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

export type Token = {
  id: string | null;
  validityPeriod: number | null;
};

export type InitialState = {
  token: Token | null;
};

export type PayloadToken = Token | null;

export type FormUser = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  avatar: string | null;
};

export type UserProfile = Omit<FormUser, 'password' | 'repeatPassword'>;

export type UseValidateFormArgs = {
  reset: UseFormReset<FormUser>;
  setValue: UseFormSetValue<FormUser>;
  setPreviewAvatar: Dispatch<SetStateAction<string | null>>;
  previewAvatar: Base64URLString | null;
};
