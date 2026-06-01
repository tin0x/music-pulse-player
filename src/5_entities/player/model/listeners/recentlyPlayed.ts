import { setRecentlyPlayedTracks, setTrack } from '@entities/player/model/playerSlice.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';

export const setupRecentlyPlayed = (startListening: AppStartListening) => {
  startListening({
    actionCreator: setTrack,

    effect: async (_, listenerApi) => {
      const { track, context, recentlyPlayedTracks } = listenerApi.getState().player;
      const type = context?.type;

      const trackId = track?.id;

      if (!trackId || !type) return;

      if (type === 'recently') return;

      const updatedPlayedTracks = [trackId, ...recentlyPlayedTracks.filter((track) => track !== trackId)].slice(0, 5);

      listenerApi.dispatch(setRecentlyPlayedTracks(updatedPlayedTracks));
    },
  });
};
