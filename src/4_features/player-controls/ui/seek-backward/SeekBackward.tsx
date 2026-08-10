import React from 'react';
import { useSeekBackward } from '@features/player-controls/model/useSeekBackward.ts';
import { ButtonSeekBackward } from '@entities/player';

const SeekBackward: React.FC = () => {
  const { handleSeekBackward, isBuffering } = useSeekBackward();

  return <ButtonSeekBackward onClick={handleSeekBackward} isDisabled={isBuffering} />;
};

export default SeekBackward;
