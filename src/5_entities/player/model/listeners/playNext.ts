import { playNext } from '@entities/player/model/actions.ts';
import { selectTracksByIds, selectTrendingTracks } from '@entities/track/model/selectors.ts';
import type { Track } from '@entities/track/types.ts';
import { selectTracksByGenre } from '@entities/album/model/selectors.ts';
import { setTrack, togglePlay } from '@entities/player/model/playerSlice.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';
import { selectTracksByArtistId } from '@entities/artist/model/selectors.ts';

export const setupPlayNext = (startListening: AppStartListening) => {
  startListening({
    actionCreator: playNext,

    effect: async (action, listenerApi) => {
      const { isControlButton } = action.payload;
      const state = listenerApi.getState();
      const { track, currentTrackId, context, mode } = listenerApi.getState().player;

      const trackId = track?.id;

      const type = context?.type;
      const limit = context?.params?.limit;

      if (!type) return;

      let selectedTracks: Track[] = [];

      // context type

      switch (type) {
        case 'trending':
          selectedTracks = selectTrendingTracks(state, context.params) || [];
          break;
        case 'album':
          selectedTracks = selectTracksByGenre(state, context.params) || [];
          break;
        case 'recently':
          {
            const params = { ids: context.params.ids };
            selectedTracks = selectTracksByIds(state, params) || [];
          }
          break;
        case 'artist':
          {
            selectedTracks = selectTracksByArtistId(state, context.params) || [];
            if (selectedTracks.length <= 1) {
              listenerApi.dispatch(togglePlay());
              return;
            }
          }
          break;
        case 'favorite':
          {
            const params = { ids: context.params.ids };
            selectedTracks = selectTracksByIds(state, params) || [];
          }
          break;
        case 'target':
          {
            if (!isControlButton) {
              if (mode === 'repeat') {
                listenerApi.dispatch(
                  setTrack({
                    track: { ...track },
                    playerContext: context,
                  }),
                );
                return;
              }
              listenerApi.dispatch(togglePlay());
              return;
            }
          }
          break;
        default:
          selectedTracks = [];
      }

      if (selectedTracks.length === 0) return;

      // special modes

      if (!isControlButton) {
        if (mode === 'repeat') {
          listenerApi.dispatch(
            setTrack({
              track: { ...track },
              playerContext: context,
            }),
          );
          return;
        }
      }

      if (mode === 'shuffle') {
        const otherTracks = selectedTracks.filter((track) => track.id !== currentTrackId);
        const pool = otherTracks.length > 0 ? otherTracks : selectedTracks;
        const maxIndex = limit ? Math.min(pool.length, limit) : pool.length;
        const randomIndex = Math.floor(Math.random() * maxIndex);

        const nextTrack = pool[randomIndex];

        listenerApi.dispatch(
          setTrack({
            track: {
              id: nextTrack.id,
              source: nextTrack.streamUrl,
              poster: nextTrack.cover,
              name: nextTrack.title,
              artist: {
                id: nextTrack.user.id,
                name: nextTrack.user.name,
              },
            },
            playerContext: context,
          }),
        );
        return;
      }

      // next track search algorithm

      if (selectedTracks && trackId) {
        const uniqueTracks = selectedTracks.slice(0, limit);
        const currentIndex = uniqueTracks.findIndex((track) => track.id === trackId);

        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % uniqueTracks.length;
          const nextTrack = uniqueTracks[nextIndex];

          listenerApi.dispatch(
            setTrack({
              track: {
                id: nextTrack.id,
                source: nextTrack.streamUrl,
                poster: nextTrack.cover,
                name: nextTrack.title,
                artist: {
                  id: nextTrack.user.id,
                  name: nextTrack.user.name,
                },
              },
              playerContext: context,
            }),
          );
        }
      }
    },
  });
};
