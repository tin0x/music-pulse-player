import React from 'react';
import ButtonSeekBackward from '@entities/player/ui/button-seek-backward/ButtonSeekBackward.tsx';
import { useSeekBackward } from '@features/player-controls/model/useSeekBackward.ts';

const SeekBackward: React.FC = () => {
  const { handleSeekBackward, isBuffering } = useSeekBackward();

  return <ButtonSeekBackward onClick={handleSeekBackward} isDisabled={isBuffering} />;
};

export default SeekBackward;
