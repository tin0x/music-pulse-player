import React from 'react';
import ButtonShuffleList from '@entities/player/ui/button-shuffle-list/ButtonShuffleList.tsx';
import { useChooseShuffle } from '@features/player-controls/model/useChooseShuffle.ts';

const ChooseShuffleList: React.FC = () => {
  const { modePlayer, handleChooseShuffle } = useChooseShuffle();

  return <ButtonShuffleList modePlayer={modePlayer} onClick={handleChooseShuffle} />;
};

export default ChooseShuffleList;
