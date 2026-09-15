import { useInitFavoritePage } from '@pages/favorite-page/model/useInitFavoritePage.ts';
import classes from '@pages/favorite-page/ui/FavoritePage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { FavoriteSectionWidget } from '@widgets/favorite-section-widget';
import { ItemListWidget } from '@widgets/item-list-widget';
import React from 'react';

const FavoritePage: React.FC = () => {
  useToggleTitle('Favorite');
  const { paramType } = useInitFavoritePage();
  useCleaningURL();

  if (paramType === 'artists' || paramType === 'tracks') {
    return (
      <section className={classes.favorite}>
        <div className={classes.favoriteWrapper}>
          <ItemListWidget paramType={paramType} />
        </div>
      </section>
    );
  }

  return (
    <section className={classes.favorite}>
      <div className={classes.favoriteWrapper}>
        <FavoriteSectionWidget />
      </div>
    </section>
  );
};

export default FavoritePage;
