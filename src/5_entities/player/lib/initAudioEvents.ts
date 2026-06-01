import {
  setDuration,
  setIsBuffering,
  toggleIsEnded,
  togglePlay,
  updateProgress,
  updateVolume,
} from '@entities/player/model/playerSlice.ts';
import { playNext } from '@entities/player/model/actions.ts';
import type { AppDispatch } from '@app/store/store.ts';
import { audio } from '@entities/player/lib/audioInstance.ts';

let errorCount = 0;

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
    if (errorCount >= 5) {
      errorCount = 0;
      dispatch(setIsBuffering(false));
      dispatch(togglePlay());
      console.log('Many corrupted tracks, player paused. Try restarting the internet.');
      return;
    }

    const error = audio.error;
    errorCount = errorCount + 1;

    if (error?.code === error?.MEDIA_ERR_SRC_NOT_SUPPORTED) {
      dispatch(playNext({ isControlButton: false }));
      console.log(`The path to the track is damaged, the next track begins`);
      console.log(error?.message);
    }
  };
};
