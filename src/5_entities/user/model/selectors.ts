import type { RootState } from '@app/store/store.ts';
import type { InitialState } from '@entities/user/types.ts';

export const getUser = (state: RootState): InitialState['user'] => state.user.user;
export const getMessage = (state: RootState): InitialState['messages'] => state.user.messages;
export const getCurrentLanguage = (state: RootState): InitialState['language'] => state.user.language;
