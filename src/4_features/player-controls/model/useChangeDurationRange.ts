import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTime, getDuration } from '@entities/player/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import React from 'react';
import { changeDurationRange } from '@entities/player/model/actions.ts';

export const useChangeDurationRange = () => {
  const totalDuration = useAppSelector(getDuration);
  const currentTime = useAppSelector(getCurrentTime);

  const timeLeft = totalDuration - currentTime;

  const dispatch = useAppDispatch();

  const handleDurationSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch(changeDurationRange({ type: 'absolute', range: value }));
  };

  return { totalDuration, currentTime, timeLeft, handleDurationSeek };
};
