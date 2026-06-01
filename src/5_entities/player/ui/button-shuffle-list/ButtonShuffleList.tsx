import React from 'react';
import type { ButtonShuffleListProps } from '@entities/player/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import classes from '@entities/player/ui/button-shuffle-list/ButtonShuffleList.module.scss';
import IconShuffle from '@shared/assets/icons/shuffle.svg?react';
import clsx from 'clsx';

const ButtonShuffleList: React.FC<ButtonShuffleListProps> = ({ modePlayer, onClick }) => {
  return (
    <Button
      className={clsx(classes.buttonShuffleList, {
        [classes.buttonShuffleListActive]: modePlayer === 'shuffle',
      })}
      onClick={onClick}
      aria-label="shuffle list"
      lang="en"
    >
      <IconShuffle aria-hidden />
    </Button>
  );
};

export default ButtonShuffleList;
