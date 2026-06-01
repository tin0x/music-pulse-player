import { changeLoudnessRange } from '@entities/player/model/actions.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener.ts';

export const setupChangeLoudnessRange = (startListening: AppStartListening) => {
  startListening({
    actionCreator: changeLoudnessRange,

    effect: (action) => {
      const { range } = action.payload;

      audio.volume = range;
    },
  });
};
