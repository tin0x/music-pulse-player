import { load } from '@shared/lib/utils/storage/load.ts';
import { remove } from '@shared/lib/utils/storage/remove.ts';
import { store } from '@app/store/store.ts';
import { setToken } from '@features/auth/model/authSlice.ts';
import { setUser, toggleLanguage } from '@entities/user/model/userSlice.ts';
import type { UserPayload } from '@entities/user/types.ts';
import type { PayloadToken } from '@features/auth/types.ts';
import type { InitialState } from '@entities/player/types.ts';
import type { InitialState as UserState } from '@entities/user/types.ts';
import { setRecentlyPlayedTracks, updateFavoriteList } from '@entities/player/model/playerSlice.ts';

export const rehydrateStore = () => {
  const token = load<PayloadToken>('token');
  const user = load<UserPayload>('user');
  const favoriteList = load<InitialState['favoriteList']>('favoriteList') || {
    tracks: [],
    artists: [],
  };
  const playedTracks = load<string[]>('playedTracks') || [];
  const currentLanguage = load<UserState['language']>('language') || 'en';

  if (!token?.validityPeriod) return;

  const isExpired = Date.now() > token.validityPeriod;

  if (isExpired) {
    remove('token');
    remove('user');
    return;
  }

  if (!user) {
    remove('token');
    remove('user');
    return;
  }

  store.dispatch(setToken(token));
  store.dispatch(setUser(user));
  store.dispatch(updateFavoriteList(favoriteList));
  store.dispatch(setRecentlyPlayedTracks(playedTracks));
  store.dispatch(toggleLanguage(currentLanguage));
};
