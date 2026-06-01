import type { Track } from '@entities/track/types.ts';
import { playPrevious } from '@entities/player/model/actions.ts';
import { selectTracksByIds, selectTrendingTracks } from '@entities/track/model/selectors.ts';
import { selectTracksByGenre } from '@entities/album/model/selectors.ts';
import { setTrack } from '@entities/player/model/playerSlice.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';
import { selectTracksByArtistId } from '@entities/artist/model/selectors.ts';

export const setupPlayPrevious = (startListening: AppStartListening) => {
  startListening({
    actionCreator: playPrevious,

    effect: async (_, listenerApi) => {
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
          selectedTracks = selectTracksByArtistId(state, context.params) || [];
          break;
        case 'favorite':
          {
            const params = { ids: context.params.ids };
            selectedTracks = selectTracksByIds(state, params) || [];
          }

          break;
        default:
          selectedTracks = [];
      }

      // special modes

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

      // prev track search algorithm

      if (selectedTracks && trackId) {
        const uniqueTracks = selectedTracks.slice(0, limit);
        const currentIndex = uniqueTracks.findIndex((track) => track.id === trackId);

        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + uniqueTracks.length) % uniqueTracks.length;
          const prevTrack = uniqueTracks[prevIndex];

          listenerApi.dispatch(
            setTrack({
              track: {
                id: prevTrack.id,
                source: prevTrack.streamUrl,
                poster: prevTrack.cover,
                name: prevTrack.title,
                artist: {
                  id: prevTrack.user.id,
                  name: prevTrack.user.name,
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
