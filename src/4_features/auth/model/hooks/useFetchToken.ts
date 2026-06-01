import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector';
import { getToken } from '@features/auth/model/selectors.ts';

export const useIsAuth = () => {
  const isAuth = Boolean(useAppSelector(getToken));

  return { isAuth };
};
