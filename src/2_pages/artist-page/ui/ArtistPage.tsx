import React from 'react';
import classes from '@pages/artist-page/ui/ArtistPage.module.scss';
import ArtistInfoWidget from '@widgets/artist-info-widget/ui/ArtistInfoWidget.tsx';
import { useInitArtistPage } from '@pages/artist-page/model/useInitArtistPage.ts';
import BackgroundSectionWidget from '@widgets/background-section-widget/ui/BackgroundSectionWidget.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';

const ArtistPage: React.FC = () => {
  useToggleTitle('Music Pulse | Artist');
  const { id: artistIdParam, pageParam, limitParam } = useInitArtistPage();

  return (
    <section className={classes.artist}>
      <div className={classes.artistWrapper}>
        <ArtistInfoWidget artistIdParam={artistIdParam || ''} pageParam={pageParam} limitParam={limitParam} />
        <BackgroundSectionWidget idParam={artistIdParam} type="artist" />
      </div>
    </section>
  );
};

export default ArtistPage;
