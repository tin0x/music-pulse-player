import React from 'react';
import classes from '@widgets/favorite-section-widget/ui/FavoriteSectionWidget.module.scss';
import { useInitFavoriteSectionWidget } from '@widgets/favorite-section-widget/model/useInitFavoriteSectionWidget.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import FavoriteSectionSkeleton from '@shared/ui/skeletons/favorite-section-skeleton/FavoriteSectionSkeleton.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { TrackList } from '@entities/track';
import { ArtistSlider } from '@entities/artist';

const FavoriteSectionWidget: React.FC = () => {
  const {
    artists,
    tracks,
    isLoading,
    isError,
    isPlaying,
    isBuffering,
    currentTrackId,
    limitTracks,
    messagePlaceholder,
    handleRefetch,
    renderAction,
    renderDurationChange,
  } = useInitFavoriteSectionWidget();

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (isLoading) {
    return <FavoriteSectionSkeleton />;
  }

  if (isError) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={handleRefetch} />;
  }

  if ((!artists || artists.length === 0) && (!tracks || tracks.length === 0)) {
    return <QueryPlaceholder lang={lang} variant="empty" alternativeMessage={messagePlaceholder[lang].all} />;
  }

  if ((!artists || artists.length === 0) && tracks && tracks.length > 0) {
    return (
      <div className={classes.favoriteSection}>
        <QueryPlaceholder lang={lang} variant="empty" alternativeMessage={messagePlaceholder[lang].artist} />
        <TrackList
          tracks={tracks}
          isPlaying={isPlaying}
          isBuffering={isBuffering}
          currentTrackId={currentTrackId || ''}
          renderDuration={renderDurationChange}
          renderAction={renderAction}
          limitTracks={limitTracks}
          lang={lang}
        />
      </div>
    );
  }

  if ((!tracks || tracks.length === 0) && artists && artists.length > 0) {
    return (
      <div className={classes.favoriteSection}>
        <ArtistSlider artists={artists} lang={lang} />
        <QueryPlaceholder lang={lang} variant="empty" alternativeMessage={messagePlaceholder[lang].track} />
      </div>
    );
  }

  return (
    <div className={classes.favoriteSection}>
      <ArtistSlider artists={artists || []} lang={lang} />
      <TrackList
        subtitle={t.str.titleTracksFavorite}
        isLinkShowMore={tracks && tracks.length > 10}
        pathTo="/favorite/tracks"
        tracks={tracks || []}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentTrackId={currentTrackId || ''}
        renderDuration={renderDurationChange}
        renderAction={renderAction}
        limitTracks={limitTracks}
        lang={lang}
      />
    </div>
  );
};

export default FavoriteSectionWidget;
