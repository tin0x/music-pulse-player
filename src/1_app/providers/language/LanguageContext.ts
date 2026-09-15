import { createContext } from 'react';

export type LanguageType = 'en' | 'ua';

type LanguageContextType = {
  currentLanguage: LanguageType;
  setCurrentLanguage: (language: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default LanguageContext;
