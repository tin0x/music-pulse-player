import React from 'react';
import ButtonRepeatTrack from '@entities/player/ui/button-repeat-track/ButtonRepeatTrack.tsx';
import { useChooseRepeatTrack } from '@features/player-controls/model/useChooseRepeatTrack.ts';

const ChooseRepeatTrack: React.FC = () => {
  const { modePlayer, handleChooseRepeat } = useChooseRepeatTrack();

  return <ButtonRepeatTrack modePlayer={modePlayer} onClick={handleChooseRepeat} />;
};

export default ChooseRepeatTrack;
