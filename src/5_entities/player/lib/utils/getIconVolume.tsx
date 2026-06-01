import IconMute from '@shared/assets/icons/volume-mute.svg?react';
import IconVolumeLow from '@shared/assets/icons/volume-low.svg?react';
import IconVolumeMedium from '@shared/assets/icons/volume-medium.svg?react';
import IconVolumeHigh from '@shared/assets/icons/volume-high.svg?react';

export const getIconVolume = (volume: number, isMuted: boolean) => {
  if (isMuted) return <IconMute aria-hidden />;
  if (volume <= 0.2) return <IconVolumeLow aria-hidden />;
  if (volume <= 0.5) return <IconVolumeMedium aria-hidden />;

  return <IconVolumeHigh />;
};
