import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useCleaningURL = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (search || hash) {
      navigate(pathname, { replace: true });
    }
  }, [pathname, search, hash, navigate]);
};
