import { setTrack, togglePlay } from '@entities/player/model/playerSlice.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';

export const setupTogglePlayback = (startListening: AppStartListening) => {
  startListening({
    matcher: (action) => togglePlay.match(action) || setTrack.match(action),

    effect: async (_, listenerApi) => {
      const { isPlaying, track } = listenerApi.getState().player;

      const sourceTrack = track?.source;

      if (sourceTrack && audio.src !== sourceTrack) {
        audio.src = sourceTrack;
      }

      if (isPlaying && sourceTrack) {
        try {
          await audio.play();
        } catch (error) {
          if (error instanceof Error && error.name === 'AbortError') return;
        }
      } else {
        audio.pause();
      }
    },
  });
};
