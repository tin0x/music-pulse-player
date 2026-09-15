import { useInitTrackPage } from '@pages/track-page/model/useInitTrackPage.ts';
import classes from '@pages/track-page/ui/TrackPage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { BackgroundSectionWidget } from '@widgets/background-section-widget';
import { TrackInfoWidget } from '@widgets/track-info-widget';
import React from 'react';

const TrackPage: React.FC = () => {
  useToggleTitle('Track');
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
