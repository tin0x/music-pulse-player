import React from 'react';
import classes from '@pages/tracks-list-page/ui/TracksListPage.module.scss';
import TopTracksWidget from '@widgets/top-tracks-widget/ui/TopTracksWidget.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { useInitTracksListPage } from '@pages/tracks-list-page/model/useInitTracksListPage.tsx';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';

const TracksListPage: React.FC = () => {
  useToggleTitle('Music Pulse | Top Music');
  const { type, itemsPerPage, t } = useInitTracksListPage();
  useCleaningURL();

  return (
    <section className="tracksList">
      <div className={classes.trackListWrapper}>
        {type === 'trending' && (
          <TopTracksWidget
            className={classes.tracksListTopTracksWidget}
            subtitle={t.str.top50TopMusic}
            tracksLimitPerPage={itemsPerPage}
          />
        )}
      </div>
    </section>
  );
};

export default TracksListPage;
