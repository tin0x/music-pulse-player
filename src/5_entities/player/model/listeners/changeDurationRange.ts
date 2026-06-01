import { changeDurationRange } from '@entities/player/model/actions.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';

export const setupChangeDurationRange = (startListening: AppStartListening) => {
  startListening({
    actionCreator: changeDurationRange,

    effect: (action, listenerApi) => {
      const { isBuffering, track, isEnded } = listenerApi.getState().player;
      const { type, range } = action.payload;

      const sourceTrack = track?.source;

      if (isBuffering || !sourceTrack) return;

      switch (type) {
        case 'absolute':
          audio.currentTime = range;
          break;

        case 'relative':
          if (isEnded) return;
          audio.currentTime += range;
          break;
      }
    },
  });
};
