import type { UseFormReset, UseFormSetValue } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';
import type { FormUser } from '@features/auth/schemas/RegisterSchema.ts';

export type Token = {
  id: string | null;
  validityPeriod: number | null;
};

export type InitialState = {
  token: Token | null;
};

export type PayloadToken = Token | null;

export type UseValidateFormArgs = {
  reset: UseFormReset<FormUser>;
  setValue: UseFormSetValue<FormUser>;
  setPreviewAvatar: Dispatch<SetStateAction<string | null>>;
  previewAvatar: string | null;
};
