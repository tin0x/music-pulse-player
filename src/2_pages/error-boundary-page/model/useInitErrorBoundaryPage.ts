import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';

export const useInitErrorBoundaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = useAppSelector(getCurrentLanguage);

  const pathname = location.pathname;

  const handleReloadPage = () => {
    navigate(pathname, { replace: true });
  };

  const handleRedirectToMainPage = () => {
    navigate('/', { replace: true });
  };

  return { lang, handleReloadPage, handleRedirectToMainPage };
};
