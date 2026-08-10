import React from 'react';
import classes from '@pages/track-page/ui/TrackPage.module.scss';
import { useInitTrackPage } from '@pages/track-page/model/useInitTrackPage.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { BackgroundSectionWidget } from '@widgets/background-section-widget';
import { TrackInfoWidget } from '@widgets/track-info-widget';

const TrackPage: React.FC = () => {
  useToggleTitle('Music Pulse | Track');
  const { trackIdParam } = useInitTrackPage();
  useCleaningURL();

  return (
    <section className={classes.track}>
      <div className={classes.trackWrapper}>
        <TrackInfoWidget trackIdParam={trackIdParam || ''} />
        <BackgroundSectionWidget type="track" idParam={trackIdParam || ''} />
      </div>
    </section>
  );
};

export default TrackPage;
