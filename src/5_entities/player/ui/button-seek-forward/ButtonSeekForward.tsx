import React from 'react';
import classes from '@entities/player/ui/button-seek-forward/ButtonSeekForward.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import IconSeekForward from '@shared/assets/icons/seek-forward.svg?react';
import type { ButtonSeekForwardProps } from '@entities/player/types.ts';

const ButtonSeekForward: React.FC<ButtonSeekForwardProps> = ({ onClick, isDisabled }) => {
  return (
    <Button
      className={classes.buttonSeekForward}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="seek-forward"
      lang="en"
    >
      <IconSeekForward aria-hidden />
    </Button>
  );
};

export default ButtonSeekForward;
