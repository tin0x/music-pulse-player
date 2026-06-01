import React from 'react';
import InputLoudnessRange from '@entities/player/ui/input-loudness-range/InputLoudnessRange.tsx';
import ToggleLoudness from '@features/player-controls/ui/toggle-loudness/ToggleLoudness.tsx';
import { useChangeLoudnessRange } from '@features/player-controls/model/useChangeLoudnessRange.ts';

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
