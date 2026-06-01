import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsMuted, getVolume } from '@entities/player/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import React from 'react';
import { changeLoudnessRange } from '@entities/player/model/actions.ts';

export const useChangeLoudnessRange = () => {
  const volume = useAppSelector(getVolume);
  const isMuted = useAppSelector(getIsMuted);
  const dispatch = useAppDispatch();

  const handleLoudnessSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    dispatch(changeLoudnessRange({ range: value }));
  };

  return { volume, isMuted, handleLoudnessSeek };
};
