import { audio } from '@entities/player/lib/audioInstance';
import type { AppStartListening } from '@entities/player/model/listeners/playerListener';
import { clearPlayer } from '@entities/player/model/playerSlice';
import authApi from '@features/logout/api/authApi';

export const setupResetPlayerSettings = (startListening: AppStartListening) => {
  startListening({
    matcher: authApi.endpoints.logout.matchFulfilled,

    effect: (_, listenerApi) => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      listenerApi.dispatch(clearPlayer());
    },
  });
};
