import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector';
import { getMessage, getUser } from '@entities/user/model/selectors.ts';

export const useFetchUser = () => {
  const user = useAppSelector(getUser);
  const messages = useAppSelector(getMessage);

  return { user, messages };
};
