import { store } from '@app/store/store.ts';
import { remove } from '@shared/lib/utils/storage/remove.ts';
import { save } from '@shared/lib/utils/storage/save.ts';

export const persistStore = () => {
  let lastUser = store.getState().user.user;
  let lastFavoriteList = store.getState().player.favoriteList;
  let lastPlayedTracks = store.getState().player.recentlyPlayedTracks;

  store.subscribe(() => {
    const state = store.getState();
    const currentUser = state.user.user;
    const currentFavoriteList = state.player.favoriteList;
    const currentPlayedTracks = state.player.recentlyPlayedTracks;

    if (currentUser !== lastUser) {
      if (currentUser) {
        save('user', currentUser);
      } else {
        remove('user');
      }

      lastUser = currentUser;
    }

    if (currentFavoriteList !== lastFavoriteList) {
      if (currentFavoriteList.tracks.length === 0 && currentFavoriteList.artists.length === 0) {
        remove('favoriteList');
      } else {
        save('favoriteList', currentFavoriteList);
      }

      lastFavoriteList = currentFavoriteList;
    }

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
