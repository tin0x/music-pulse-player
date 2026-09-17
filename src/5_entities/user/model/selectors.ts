import type { RootState } from '@app/store/store.ts';
import type { InitialState } from '@entities/user/types.ts';

export const getMessage = (state: RootState): InitialState['messages'] => state.user.messages;
