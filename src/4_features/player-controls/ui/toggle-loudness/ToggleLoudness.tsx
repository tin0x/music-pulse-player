import React from 'react';
import { useToggleLoudness } from '@features/player-controls/model/useToggleLoudness.ts';
import { ButtonLoudness } from '@entities/player';

const ToggleLoudness: React.FC = () => {
  const { volume, isMuted, handleToggleLoudness } = useToggleLoudness();

  return <ButtonLoudness volume={volume} isMuted={isMuted} onClick={handleToggleLoudness} />;
};

export default ToggleLoudness;
