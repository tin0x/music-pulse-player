import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';

export const useInitProfileCardWidget = () => {
  const { pathname } = useLocation();
  const lang = useAppSelector(getCurrentLanguage);

  const isPath = pathname.startsWith('/profile');

  return { isPath, lang };
};
