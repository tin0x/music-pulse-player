import { getCurrentTime, getCurrentTrackId, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';

export const useInitDurationChange = (trackId: string) => {
  const currentTime = useAppSelector(getCurrentTime);
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const isPlaying = useAppSelector(getIsPlaying);

  const isCurrent = currentTrackId === trackId;

  return { isCurrent, currentTime, isPlaying };
};
