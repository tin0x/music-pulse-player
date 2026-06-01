import React from 'react';
import classes from '@entities/player/ui/button-favorite-track/ButtonFavoriteTrack.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import IconLove from '@shared/assets/icons/heart.svg?react';
import type { ButtonFavoriteTrackProps } from '@entities/player/types.ts';
import clsx from 'clsx';

const ButtonFavoriteTrack: React.FC<ButtonFavoriteTrackProps> = ({ onClick, isFavorite }) => {
  return (
    <Button
      className={clsx(classes.buttonFavoriteTrack, {
        [classes.buttonFavoriteTrackActive]: isFavorite,
      })}
      onClick={onClick}
    >
      <IconLove />
    </Button>
  );
};

export default ButtonFavoriteTrack;
