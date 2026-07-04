import React from 'react';
import classes from '@pages/favorite-page/ui/FavoritePage.module.scss';
import FavoriteSectionWidget from '@widgets/favorite-section-widget/ui/FavoriteSectionWidget.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { useInitFavoritePage } from '@pages/favorite-page/model/useInitFavoritePage.ts';
import ItemListWidget from '@widgets/item-list-widget/ui/ItemListWidget.tsx';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';

const FavoritePage: React.FC = () => {
  useToggleTitle('Music Pulse | Favorite');
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
