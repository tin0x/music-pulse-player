import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import classes from '@entities/player/ui/button-previous-track/ButtonPreviousTrack.module.scss';
import IconPrevious from '@shared/assets/icons/previous.svg?react';
import type { ButtonPreviousTrackProps } from '@entities/player/types.ts';

const ButtonPreviousTrack: React.FC<ButtonPreviousTrackProps> = React.memo(({ onClick }) => {
  return (
    <Button className={classes.buttonPreviousTrack} onClick={onClick} aria-label="switch previous track" lang="en">
      <IconPrevious aria-hidden />
    </Button>
  );
});

export default ButtonPreviousTrack;
