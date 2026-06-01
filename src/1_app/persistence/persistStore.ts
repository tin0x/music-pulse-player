import { store } from '@app/store/store.ts';
import { save } from '@shared/lib/utils/storage/save.ts';
import { remove } from '@shared/lib/utils/storage/remove.ts';

export const persistStore = () => {
  let lastToken = store.getState().auth.token;
  let lastUser = store.getState().user.user;
  let lastFavoriteList = store.getState().player.favoriteList;
  let lastPlayedTracks = store.getState().player.recentlyPlayedTracks;
  let lastLanguage = store.getState().user.language;

  store.subscribe(() => {
    const state = store.getState();
    const currentToken = state.auth.token;
    const currentUser = state.user.user;
    const currentFavoriteList = state.player.favoriteList;
    const currentPlayedTracks = state.player.recentlyPlayedTracks;
    const currentLanguage = state.user.language;

    if (currentToken !== lastToken) {
      if (currentToken) {
        save('token', currentToken);
      } else {
        remove('token');
      }

      lastToken = currentToken;
    }

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

    if (currentLanguage !== lastLanguage) {
      if (currentLanguage) {
        save('language', currentLanguage);
      } else {
        remove('language');
      }
      lastLanguage = currentLanguage;
    }
  });
};
