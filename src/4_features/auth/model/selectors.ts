import type { RootState } from '@app/store/store.ts';
import type { InitialState } from '@features/auth/types.ts';

export const getToken = (state: RootState): InitialState['token'] => state.auth.token;
export const getIsAuth = (state: RootState) => {
  const token = state.auth.token;

  if (!token || !token.validityPeriod) return false;

  return Date.now() < token.validityPeriod;
};
