import { useInitAlbumPage } from '@pages/album-page/model/useInitAlbumPage.ts';
import classes from '@pages/album-page/ui/AlbumPage.module.scss';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { FilteredTracksWidget } from '@widgets/filtered-tracks-widget';
import React from 'react';

const AlbumPage: React.FC = () => {
  useToggleTitle('Album');
  const { currentGenre, tracksLimitPerPage, currentPage, totalTracks, t } = useInitAlbumPage();

  return (
    <section className={classes.album}>
      <div className={classes.albumWrapper}>
        <div className={classes.albumTopBar}>
          <h1
            className={classes.albumTitle}
          >{`${t.str.titleAlbum} ${t.str[currentGenre as keyof typeof t.str] || t.str['House']}`}</h1>
        </div>
        <FilteredTracksWidget
          genre={currentGenre}
          tracksLimitPerPage={tracksLimitPerPage ?? 5}
          currentPage={currentPage}
          totalTracks={totalTracks}
        />
      </div>
    </section>
  );
};

export default AlbumPage;
