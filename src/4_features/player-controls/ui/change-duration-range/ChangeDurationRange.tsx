import React from 'react';
import { useChangeDurationRange } from '@features/player-controls/model/useChangeDurationRange.ts';
import { InputDurationRange } from '@entities/player';

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
