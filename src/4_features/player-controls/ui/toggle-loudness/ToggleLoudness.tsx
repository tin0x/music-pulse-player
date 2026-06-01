import React from 'react';
import ButtonLoudness from '@entities/player/ui/button-loudness/ButtonLoudness.tsx';
import { useToggleLoudness } from '@features/player-controls/model/useToggleLoudness.ts';

const ToggleLoudness: React.FC = () => {
  const { volume, isMuted, handleToggleLoudness } = useToggleLoudness();

  return <ButtonLoudness volume={volume} isMuted={isMuted} onClick={handleToggleLoudness} />;
};

export default ToggleLoudness;
