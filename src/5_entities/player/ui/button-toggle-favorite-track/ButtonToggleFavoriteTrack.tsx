import React from 'react';
import type { ButtonFavoriteTrackProps } from '@entities/player/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import clsx from 'clsx';
import classes from '@entities/player/ui/button-toggle-favorite-track/ButtonToggleFavoriteTrack.module.scss';
import IconHeart from '@shared/assets/icons/heart.svg?react';

const ToggleFavoriteTrack: React.FC<ButtonFavoriteTrackProps> = ({ isFavorite, onClick }) => {
  return (
    <Button
      className={clsx(classes.buttonToggleFavoriteTrack, {
        [classes.buttonToggleFavoriteTrackActive]: isFavorite,
      })}
      onClick={onClick}
    >
      <IconHeart />
    </Button>
  );
};

export default ToggleFavoriteTrack;
