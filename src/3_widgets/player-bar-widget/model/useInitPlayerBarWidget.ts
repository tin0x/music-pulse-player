import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import {
  getContext,
  getCurrentTrack,
  getCurrentTrackId,
  getIsBuffering,
  getIsPlaying,
} from '@entities/player/model/selectors.ts';

export const useInitPlayerBarWidget = () => {
  const playerContext = useAppSelector(getContext);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const currentTrack = useAppSelector(getCurrentTrack);
  const isPlaying = useAppSelector(getIsPlaying);

  const isThisPlayingTrack = currentTrackId === currentTrack?.id;

  return { playerContext, currentTrack, isThisPlayingTrack, isPlaying, isBuffering };
};
