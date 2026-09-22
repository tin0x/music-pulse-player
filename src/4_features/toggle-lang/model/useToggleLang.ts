import useLanguage from '@app/providers/language/useLanguage';
import { addMessage } from '@entities/user/model/userSlice.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { save } from '@shared/lib/utils/storage/save';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import React from 'react';

export const useToggleLang = () => {
  const dispatch = useAppDispatch();
  const { setCurrentLanguage } = useLanguage();

  const handleToggleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id as 'en' | 'ua';
    const t = getTranslate(value);

    setCurrentLanguage(value);
    save('language', value);

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
