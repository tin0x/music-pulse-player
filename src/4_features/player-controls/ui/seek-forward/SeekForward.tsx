import React from 'react';
import ButtonSeekForward from '@entities/player/ui/button-seek-forward/ButtonSeekForward.tsx';
import { useSeekForward } from '@features/player-controls/model/useSeekForward.ts';

const SeekForward: React.FC = () => {
  const { handleSeekForward, isBuffering } = useSeekForward();

  return <ButtonSeekForward onClick={handleSeekForward} isDisabled={isBuffering} />;
};

export default SeekForward;
