import React from 'react';
import type { ToggleFavoriteProps } from '@features/toggle-favorite/types.ts';
import { useToggleFavorite } from '@features/toggle-favorite/model/useToggleFavorite.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconHeart from '@shared/assets/icons/heart.svg?react';
import clsx from 'clsx';
import classes from '@features/toggle-favorite/ui/ToggleFavorite.module.scss';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ToggleFavorite: React.FC<ToggleFavoriteProps> = ({ type, id, variantButton }) => {
  const { isFavorite, handleToggleFavorite } = useToggleFavorite(type, id);
  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  const entities = type === 'artist' ? t.str.artist : t.str.track;

  if (variantButton === 'icon') {
    return (
      <Button
        className={clsx(classes.toggleFavoriteIcon, {
          [classes.toggleFavoriteIconActive]: isFavorite,
        })}
        onClick={handleToggleFavorite}
        aria-label="toggle favorite"
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
