import React from 'react';
import { useChooseRepeatTrack } from '@features/player-controls/model/useChooseRepeatTrack.ts';
import { ButtonRepeatTrack } from '@entities/player';

const ChooseRepeatTrack: React.FC = () => {
  const { modePlayer, handleChooseRepeat } = useChooseRepeatTrack();

  return <ButtonRepeatTrack modePlayer={modePlayer} onClick={handleChooseRepeat} />;
};

export default ChooseRepeatTrack;
