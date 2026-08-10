import React from 'react';
import classes from '@pages/artist-page/ui/ArtistPage.module.scss';
import { useInitArtistPage } from '@pages/artist-page/model/useInitArtistPage.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { ArtistInfoWidget } from '@widgets/artist-info-widget';
import { BackgroundSectionWidget } from '@widgets/background-section-widget';

const ArtistPage: React.FC = () => {
  useToggleTitle('Music Pulse | Artist');
  const { id: artistIdParam, currentPage, itemsPerPage } = useInitArtistPage();

  return (
    <section className={classes.artist}>
      <div className={classes.artistWrapper}>
        <ArtistInfoWidget artistIdParam={artistIdParam || ''} pageParam={currentPage} limitParam={itemsPerPage} />
        <BackgroundSectionWidget idParam={artistIdParam} type="artist" />
      </div>
    </section>
  );
};

export default ArtistPage;
