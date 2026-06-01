import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsMuted, getVolume } from '@entities/player/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { setMute } from '@entities/player/model/playerSlice.ts';

export const useToggleLoudness = () => {
  const dispatch = useAppDispatch();
  const volume = useAppSelector(getVolume);
  const isMuted = useAppSelector(getIsMuted);

  const handleToggleLoudness = () => {
    dispatch(setMute());
  };

  return { volume, isMuted, handleToggleLoudness };
};
