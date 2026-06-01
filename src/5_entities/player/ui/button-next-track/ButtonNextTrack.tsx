import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import IconNext from '@shared/assets/icons/next.svg?react';
import classes from '@entities/player/ui/button-next-track/ButtonNextTrack.module.scss';
import type { ButtonNextTrackProps } from '@entities/player/types.ts';

const ButtonNextTrack: React.FC<ButtonNextTrackProps> = ({ onClick }) => {
  return (
    <Button className={classes.buttonNextTrack} onClick={onClick} aria-label="switch next track" lang="en">
      <IconNext aria-hidden />
    </Button>
  );
};

export default ButtonNextTrack;
