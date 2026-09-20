import { store } from '@app/store/store.ts';
import { setRecentlyPlayedTracks } from '@entities/player/model/playerSlice.ts';
import { load } from '@shared/lib/utils/storage/load.ts';

export const rehydrateStore = () => {
  const playedTracks = load<string[]>('playedTracks') || [];

  store.dispatch(setRecentlyPlayedTracks(playedTracks));
};
