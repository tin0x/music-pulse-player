import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuth } from '@features/auth/model/hooks/useFetchToken.ts';
import classes from '@pages/dashboard-page/ui/DashboardPage.module.scss';
import GenreSlider from '@entities/album/ui/genre/genre-slider/GenreSlider.tsx';
import TopTracksWidget from '@widgets/top-tracks-widget/ui/TopTracksWidget.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import SearchKeywordWidget from '@widgets/search-keyword-widget/ui/SearchKeywordWidget.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';

const DashboardPage: React.FC = () => {
  const { isAuth } = useIsAuth();
  useToggleTitle('Music Pulse | Dashboard');
  useCleaningURL();

  const tracksLimitPerPage = 5;

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (!isAuth) {
    return <Navigate to="/auth"></Navigate>;
  }

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
