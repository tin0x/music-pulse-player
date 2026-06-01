import React from 'react';
import type { ButtonSeekBackwardProps } from '@entities/player/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import classes from '@entities/player/ui/button-seek-backward/ButtonSeekBackward.module.scss';
import IconSeekBackward from '@shared/assets/icons/seek-backward.svg?react';

const ButtonSeekBackward: React.FC<ButtonSeekBackwardProps> = ({ onClick, isDisabled }) => {
  return (
    <Button
      className={classes.buttonSeekBackward}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="seek backward"
      lang="en"
    >
      <IconSeekBackward aria-hidden />
    </Button>
  );
};

export default ButtonSeekBackward;
