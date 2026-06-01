import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import IconPlay from '@shared/assets/icons/play.svg?react';
import IconPause from '@shared/assets/icons/pause.svg?react';
import type { ButtonTogglePlaybackProps } from '@entities/player/types.ts';
import classes from '@entities/player/ui/button-toggle-playback/ButtonTogglePlayback.module.scss';
import Loader from '@shared/ui/loader/Loader.tsx';
import clsx from 'clsx';

const ButtonTogglePlayback: React.FC<ButtonTogglePlaybackProps> = React.memo(
  ({ className, isPlaying, isBuffering, onClick }) => {
    if (isBuffering) {
      return (
        <Button
          className={clsx(className, classes.buttonTogglePlayback)}
          aria-label="loading a track"
          lang="en"
          onClick={onClick}
        >
          <Loader className={classes.buttonTogglePlaybackLoader} />
        </Button>
      );
    } else {
      return (
        <Button
          className={clsx(className, classes.buttonTogglePlayback)}
          aria-label={isPlaying ? 'pause' : 'play'}
          lang="en"
          onClick={onClick}
        >
          {isPlaying ? <IconPause aria-hidden /> : <IconPlay aria-hidden />}
        </Button>
      );
    }
  },
);

export default ButtonTogglePlayback;
