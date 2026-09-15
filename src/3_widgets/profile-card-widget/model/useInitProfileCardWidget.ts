import useLanguage from '@app/providers/language/useLanguage';
import { useLocation } from 'react-router-dom';

export const useInitProfileCardWidget = () => {
  const { pathname } = useLocation();
  const { currentLanguage } = useLanguage();

  const isPath = pathname.startsWith('/profile');

  return { isPath, lang: currentLanguage };
};
