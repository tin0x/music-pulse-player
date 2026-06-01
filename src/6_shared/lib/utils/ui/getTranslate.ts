import { translations } from '@shared/constants/lang.ts';

export type Lang = keyof typeof translations;

export type Translation = typeof translations.en;

export const getTranslate = (lang: Lang = 'en'): Translation => {
  return translations[lang] || translations.en;
};
