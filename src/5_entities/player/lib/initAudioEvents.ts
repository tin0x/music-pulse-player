import type { AppDispatch } from '@app/store/store.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';
import { playNext } from '@entities/player/model/actions.ts';
import {
  setDuration,
  setIsBuffering,
  toggleIsEnded,
  togglePlay,
  updateProgress,
  updateVolume,
} from '@entities/player/model/playerSlice.ts';
import type { ErrorMessagesFields, ErrorMessagesKeys } from '@entities/player/types';
import { showToast } from '@shared/lib/slices/toast/model/toastSlice';

let errorCount = 0;

const errorMessages: Record<ErrorMessagesKeys, ErrorMessagesFields> = {
  en: {
    corruptedFile: 'The path to the track is damaged, the next track begins',
    internet: 'Many corrupted tracks, player paused. Try restarting the internet.',
  },
  ua: {
    corruptedFile: 'Шлях до треку пошкоджено, починається наступний трек.',
    internet: 'Багато пошкоджених треків, відтворення призупинено. Спробуйте перезапустити інтернет.',
  },
};

export const initAudioEvents = (dispatch: AppDispatch) => {
  audio.onplaying = () => {
    errorCount = 0;
    dispatch(setIsBuffering(false));
    dispatch(toggleIsEnded(false));
  };

  audio.onwaiting = () => {
    dispatch(setIsBuffering(true));
  };

  audio.onloadedmetadata = () => {
    dispatch(setDuration(audio.duration));
  };

  audio.ontimeupdate = () => {
    dispatch(updateProgress(audio.currentTime));
  };

  audio.onvolumechange = () => {
    dispatch(updateVolume(audio.volume));
  };

  audio.onended = () => {
    dispatch(playNext({ isControlButton: false }));
    dispatch(toggleIsEnded(true));
  };

  audio.onerror = () => {
    const currentLanguage = document.documentElement.lang as ErrorMessagesKeys;
    const error = audio.error;

    if (errorCount >= 5) {
      errorCount = 0;
      dispatch(setIsBuffering(false));
      dispatch(togglePlay());

      dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage].internet }));
      console.error(error?.message);
      return;
    }

    errorCount = errorCount + 1;

    if (error?.code === error?.MEDIA_ERR_SRC_NOT_SUPPORTED) {
      dispatch(playNext({ isControlButton: false }));
      dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage].corruptedFile }));
      console.error(error?.message);
      return;
    }
  };
};
