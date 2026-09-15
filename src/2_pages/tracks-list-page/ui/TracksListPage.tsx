import { useInitTracksListPage } from '@pages/tracks-list-page/model/useInitTracksListPage.tsx';
import classes from '@pages/tracks-list-page/ui/TracksListPage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { TopTracksWidget } from '@widgets/top-tracks-widget';
import React from 'react';

const TracksListPage: React.FC = () => {
  useToggleTitle('Top Music');
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
