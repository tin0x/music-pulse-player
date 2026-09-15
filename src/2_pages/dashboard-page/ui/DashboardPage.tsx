import useLanguage from '@app/providers/language/useLanguage';
import { GenreSlider } from '@entities/album';
import classes from '@pages/dashboard-page/ui/DashboardPage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { SearchKeywordWidget } from '@widgets/search-keyword-widget';
import { TopTracksWidget } from '@widgets/top-tracks-widget';
import React from 'react';

const DashboardPage: React.FC = () => {
  useToggleTitle('Dashboard');
  useCleaningURL();

  const tracksLimitPerPage = 5;

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  return (
    <section className={classes.dashboard}>
      <div className={classes.dashboardWrapper}>
        <SearchKeywordWidget />
        <GenreSlider className={classes.dashboardGenreSlider} lang={currentLanguage} />
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
