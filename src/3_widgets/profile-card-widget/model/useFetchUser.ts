import useAuth from '@app/providers/auth/useAuth';
import { useGetUserInfoQuery } from '@entities/user';
import { getMessage } from '@entities/user/model/selectors.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector';

export const useFetchUser = () => {
  const messages = useAppSelector(getMessage);
  const { session } = useAuth();

  const userId = session?.user?.id;
  const { data, isLoading, isError } = useGetUserInfoQuery(userId ? { userId } : skipToken);

  return { messages, user: data, isLoading, isError };
};
