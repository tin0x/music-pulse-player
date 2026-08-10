import React from 'react';
import { useChooseShuffle } from '@features/player-controls/model/useChooseShuffle.ts';
import { ButtonShuffleList } from '@entities/player';

const ChooseShuffleList: React.FC = () => {
  const { modePlayer, handleChooseShuffle } = useChooseShuffle();

  return <ButtonShuffleList modePlayer={modePlayer} onClick={handleChooseShuffle} />;
};

export default ChooseShuffleList;
