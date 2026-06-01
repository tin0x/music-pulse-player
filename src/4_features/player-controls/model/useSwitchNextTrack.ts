import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { playNext } from '@entities/player/model/actions.ts';

export const useSwitchNextTrack = () => {
  const dispatch = useAppDispatch();

  const handleSwitchNextTrack = () => {
    dispatch(playNext({ isControlButton: true }));
  };

  return { handleSwitchNextTrack };
};
