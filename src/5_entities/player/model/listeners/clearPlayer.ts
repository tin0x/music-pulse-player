import { type AppStartListening } from '@entities/player/model/listeners/playerListener.ts';
import { clearPlayer } from '@entities/player/model/playerSlice.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';

export const setupClearPlayer = (startPlayerListening: AppStartListening) => {
  startPlayerListening({
    actionCreator: clearPlayer,

    effect: () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.currentTime = 0;
      audio.load();
    },
  });
};
