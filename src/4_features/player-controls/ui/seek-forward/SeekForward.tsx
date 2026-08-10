import React from 'react';
import { useSeekForward } from '@features/player-controls/model/useSeekForward.ts';
import { ButtonSeekForward } from '@entities/player';

const SeekForward: React.FC = () => {
  const { handleSeekForward, isBuffering } = useSeekForward();

  return <ButtonSeekForward onClick={handleSeekForward} isDisabled={isBuffering} />;
};

export default SeekForward;
