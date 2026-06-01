import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import React from 'react';
import { addMessage, toggleLanguage } from '@entities/user/model/userSlice.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useToggleLang = () => {
  const dispatch = useAppDispatch();

  const handleToggleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id as 'en' | 'ua';
    const t = getTranslate(value);

    dispatch(toggleLanguage(value));

    dispatch(
      addMessage({
        id: Date.now().toString(),
        title: t.str.messageTitleLang,
        text: t.func.messageTextLanguage(value),
      }),
    );
  };

  return { handleToggleLang };
};
