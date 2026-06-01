import { setMute } from '@entities/player/model/playerSlice.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';

export const setupMuteLoudness = (startListening: AppStartListening) => {
  startListening({
    actionCreator: setMute,

    effect: (_, listenerApi) => {
      const { isMuted } = listenerApi.getState().player;

      audio.muted = isMuted;
    },
  });
};
