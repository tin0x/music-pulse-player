import React from 'react';
import classes from '@entities/player/ui/button-repeat-track/ButtonRepeatTrack.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import type { ButtonRepeatTrackProps } from '@entities/player/types.ts';
import IconRepeat from '@shared/assets/icons/repeat.svg?react';
import clsx from 'clsx';

const ButtonRepeatTrack: React.FC<ButtonRepeatTrackProps> = ({ modePlayer, onClick }) => {
  return (
    <Button
      className={clsx(classes.buttonRepeatTrack, {
        [classes.buttonRepeatTrackActive]: modePlayer === 'repeat',
      })}
      onClick={onClick}
      aria-label="repeat track"
      lang="en"
    >
      <IconRepeat aria-hidden />
    </Button>
  );
};

export default ButtonRepeatTrack;
