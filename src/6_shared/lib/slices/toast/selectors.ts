import type { RootState } from '@app/store/store';
import type { InitialState } from '@shared/lib/slices/toast/types';

export const getToastState = (state: RootState): InitialState => state.toast;
