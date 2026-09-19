import useLanguage from '@app/providers/language/useLanguage';
import { useToggleFavorite } from '@features/toggle-favorite/model/useToggleFavorite.ts';
import type { ToggleFavoriteProps } from '@features/toggle-favorite/types.ts';
import classes from '@features/toggle-favorite/ui/ToggleFavorite.module.scss';
import IconHeart from '@shared/assets/icons/heart.svg?react';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Button from '@shared/ui/button/Button.tsx';
import clsx from 'clsx';
import React from 'react';

const ToggleFavorite: React.FC<ToggleFavoriteProps> = ({ type, id, variantButton }) => {
  const { isFavorite, isLoading, handleToggleFavorite } = useToggleFavorite(type, id);
  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const entities = type === 'artist' ? t.str.artist : t.str.track;

  if (variantButton === 'icon') {
    return (
      <Button
        className={clsx(classes.toggleFavoriteIcon, {
          [classes.toggleFavoriteIconActive]: isFavorite,
        })}
        onClick={handleToggleFavorite}
        aria-label="toggle favorite"
        disabled={isLoading}
      >
        <IconHeart aria-hidden />
      </Button>
    );
  }

  if (variantButton === 'text') {
    return (
      <Button className={clsx(classes.toggleFavorite)} onClick={handleToggleFavorite} aria-label="toggle favorite">
        {isFavorite
          ? `${t.str.dropdownValueDeleteFavorite} ${entities}`
          : `${t.str.dropdownValueAddFavorite} ${entities}`}
      </Button>
    );
  }
};

export default ToggleFavorite;
