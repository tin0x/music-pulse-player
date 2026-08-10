import React from 'react';
import { useChangeLoudnessRange } from '@features/player-controls/model/useChangeLoudnessRange.ts';
import { InputLoudnessRange } from '@entities/player';
import { ToggleLoudness } from '@features/player-controls';

const ChangeLoudnessRange: React.FC = () => {
  const { volume, isMuted, handleLoudnessSeek } = useChangeLoudnessRange();

  return (
    <InputLoudnessRange
      actionSlot={<ToggleLoudness />}
      volume={volume}
      onChange={handleLoudnessSeek}
      isMuted={isMuted}
    />
  );
};

export default ChangeLoudnessRange;
