import React from 'react';
import InputDurationRange from '@entities/player/ui/input-duration-range/InputDurationRange.tsx';
import { useChangeDurationRange } from '@features/player-controls/model/useChangeDurationRange.ts';

const ChangeDurationRange: React.FC = () => {
  const { totalDuration, currentTime, timeLeft, handleDurationSeek } = useChangeDurationRange();

  return (
    <InputDurationRange
      onChange={handleDurationSeek}
      duration={{
        totalDuration,
        currentTime,
        timeLeft,
      }}
    />
  );
};

export default ChangeDurationRange;
