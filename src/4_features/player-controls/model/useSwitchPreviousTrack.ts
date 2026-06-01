import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { playPrevious } from '@entities/player/model/actions.ts';
import { useCallback } from 'react';

export const useSwitchPreviousTrack = () => {
  const dispatch = useAppDispatch();

  const handleSwitchPreviousTrack = useCallback(() => dispatch(playPrevious()), [dispatch]);

  return { handleSwitchPreviousTrack };
};
