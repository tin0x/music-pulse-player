import React from 'react';
import classes from '@pages/dashboard-page/ui/DashboardPage.module.scss';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { GenreSlider } from '@entities/album';
import { SearchKeywordWidget } from '@widgets/search-keyword-widget';
import { TopTracksWidget } from '@widgets/top-tracks-widget';

const DashboardPage: React.FC = () => {
  useToggleTitle('Music Pulse | Dashboard');
  useCleaningURL();

  const tracksLimitPerPage = 5;

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return (
    <section className={classes.dashboard}>
      <div className={classes.dashboardWrapper}>
        <SearchKeywordWidget />
        <GenreSlider className={classes.dashboardGenreSlider} lang={lang} />
        <TopTracksWidget
          className={classes.dashboardTopTracks}
          subtitle={t.str.titleTopMusic}
          isLinkShowMore
          tracksLimitPerPage={tracksLimitPerPage}
        />
      </div>
    </section>
  );
};

export default DashboardPage;
