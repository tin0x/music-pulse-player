import useLanguage from '@app/providers/language/useLanguage';
import { useLocation, useNavigate } from 'react-router-dom';

export const useInitErrorBoundaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const pathname = location.pathname;

  const handleReloadPage = () => {
    navigate(pathname, { replace: true });
  };

  const handleRedirectToMainPage = () => {
    navigate('/', { replace: true });
  };

  return { lang: currentLanguage, handleReloadPage, handleRedirectToMainPage };
};
