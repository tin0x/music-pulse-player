import type { RootState } from '@app/store/store.ts';
import type { InitialState } from '@features/auth/types.ts';

export const getToken = (state: RootState): InitialState['token'] => state.auth.token;
