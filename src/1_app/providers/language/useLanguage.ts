import LanguageContext from '@app/providers/language/LanguageContext';
import { useContext } from 'react';

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) throw new Error('useLanguage must be used within LanguageProvider');

  return context;
};

export default useLanguage;
