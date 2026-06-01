import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';
import { toggleFavorite } from '@entities/player/model/actions.ts';
import { updateFavoriteList } from '@entities/player/model/playerSlice.ts';

export const setupToggleFavoriteTrack = (startListening: AppStartListening) => {
  startListening({
    actionCreator: toggleFavorite,

    effect: (action, listenerApi) => {
      const { favoriteList } = listenerApi.getState().player;
      const { type, id } = action.payload;

      if (type === 'track') {
        const isExisting = favoriteList.tracks.includes(id);

        if (isExisting) {
          const updatedTracks = favoriteList.tracks.filter((trackId) => trackId !== id);
          const updatedList = { ...favoriteList, tracks: updatedTracks };

          listenerApi.dispatch(updateFavoriteList(updatedList));
          return;
        }

        const updatedList = { ...favoriteList, tracks: [...favoriteList.tracks, id] };
        listenerApi.dispatch(updateFavoriteList(updatedList));
      }

      if (type === 'artist') {
        const isExisting = favoriteList.artists.includes(id);

        if (isExisting) {
          const updatedArtists = favoriteList.artists.filter((artistId) => artistId !== id);
          const updatedList = { ...favoriteList, artists: updatedArtists };

          listenerApi.dispatch(updateFavoriteList(updatedList));
          return;
        }

        const updatedList = { ...favoriteList, artists: [...favoriteList.artists, id] };
        listenerApi.dispatch(updateFavoriteList(updatedList));
      }
    },
  });
};
