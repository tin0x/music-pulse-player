import LanguageContext, { type LanguageType } from '@app/providers/language/LanguageContext';
import { load } from '@shared/lib/utils/storage/load';
import { useState } from 'react';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(() => load('language') ?? 'en');

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>{children}</LanguageContext.Provider>
  );
};

export default LanguageProvider;
