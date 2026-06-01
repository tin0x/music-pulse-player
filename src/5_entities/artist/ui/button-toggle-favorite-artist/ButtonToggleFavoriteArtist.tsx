import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { ButtonToggleFavoriteArtistProps } from '@entities/artist/types.ts';
import classes from '@entities/artist/ui/button-toggle-favorite-artist/ButtonToggleFavoriteArtist.module.scss';

const ButtonToggleFavoriteArtist: React.FC<ButtonToggleFavoriteArtistProps> = ({ isFavorite, onClick }) => {
  return (
    <Button className={classes.buttonToggleFavoriteArtist} onClick={onClick}>
      {isFavorite ? 'Delete favorite artist' : 'Add favorite artist'}
    </Button>
  );
};

export default ButtonToggleFavoriteArtist;
