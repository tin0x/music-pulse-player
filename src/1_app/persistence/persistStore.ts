import { store } from '@app/store/store.ts';
import { remove } from '@shared/lib/utils/storage/remove.ts';
import { save } from '@shared/lib/utils/storage/save.ts';

export const persistStore = () => {
  let lastPlayedTracks = store.getState().player.recentlyPlayedTracks;

  store.subscribe(() => {
    const state = store.getState();
    const currentPlayedTracks = state.player.recentlyPlayedTracks;

    if (currentPlayedTracks !== lastPlayedTracks) {
      if (currentPlayedTracks && currentPlayedTracks.length > 0) {
        save('playedTracks', currentPlayedTracks);
      } else {
        remove('playedTracks');
      }
      lastPlayedTracks = currentPlayedTracks;
    }
  });
};
