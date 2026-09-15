import { store } from '@app/store/store.ts';
import { setRecentlyPlayedTracks, updateFavoriteList } from '@entities/player/model/playerSlice.ts';
import type { InitialState } from '@entities/player/types.ts';
import { load } from '@shared/lib/utils/storage/load.ts';

export const rehydrateStore = () => {
  const favoriteList = load<InitialState['favoriteList']>('favoriteList') || {
    tracks: [],
    artists: [],
  };
  const playedTracks = load<string[]>('playedTracks') || [];

  store.dispatch(updateFavoriteList(favoriteList));
  store.dispatch(setRecentlyPlayedTracks(playedTracks));
};
