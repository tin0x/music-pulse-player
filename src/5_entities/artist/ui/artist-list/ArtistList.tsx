import React from 'react';
import classes from '@entities/artist/ui/artist-list/ArtistList.module.scss';
import ArtistPreview from '@entities/artist/ui/artist-preview/ArtitsPreview.tsx';
import type { ArtistsListProps } from '@entities/artist/types.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ArtistList: React.FC<ArtistsListProps> = React.memo(({ artists, lang }) => {
  const t = getTranslate(lang);

  return (
    <div className={classes.artistListWrapper}>
      <div className={classes.artistListTopBar}>
        <h1 className={classes.artistListTitle}>{t.str.titleArtistsListFavorite}</h1>
        <span className={classes.artistListQuantity}>{`${t.str.subtitleArtistsListFavorite} ${artists.length}`}</span>
      </div>
      <ul className={classes.artistListList}>
        {artists.map((artist) => (
          <li key={artist.id}>
            <ArtistPreview
              classNameAvatar={classes.artistListAvatar}
              name={artist.name}
              avatar={artist.avatar}
              pathTo={`/artist/${artist.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ArtistList;
