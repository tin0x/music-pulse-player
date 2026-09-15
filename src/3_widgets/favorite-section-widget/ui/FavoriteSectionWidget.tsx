import useLanguage from '@app/providers/language/useLanguage';
import { ArtistSlider } from '@entities/artist';
import { TrackList } from '@entities/track';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import FavoriteSectionSkeleton from '@shared/ui/skeletons/favorite-section-skeleton/FavoriteSectionSkeleton.tsx';
import { useInitFavoriteSectionWidget } from '@widgets/favorite-section-widget/model/useInitFavoriteSectionWidget.tsx';
import classes from '@widgets/favorite-section-widget/ui/FavoriteSectionWidget.module.scss';
import React from 'react';

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

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  if (isLoading) {
    return <FavoriteSectionSkeleton />;
  }

  if (isError) {
    return <QueryPlaceholder lang={currentLanguage} variant="queryError" onClick={handleRefetch} />;
  }

  if ((!artists || artists.length === 0) && (!tracks || tracks.length === 0)) {
    return (
      <QueryPlaceholder
        lang={currentLanguage}
        variant="empty"
        alternativeMessage={messagePlaceholder[currentLanguage].all}
      />
    );
  }

  if ((!artists || artists.length === 0) && tracks && tracks.length > 0) {
    return (
      <div className={classes.favoriteSection}>
        <QueryPlaceholder
          lang={currentLanguage}
          variant="empty"
          alternativeMessage={messagePlaceholder[currentLanguage].artist}
        />
        <TrackList
          tracks={tracks}
          isPlaying={isPlaying}
          isBuffering={isBuffering}
          currentTrackId={currentTrackId || ''}
          renderDuration={renderDurationChange}
          renderAction={renderAction}
          limitTracks={limitTracks}
          lang={currentLanguage}
        />
      </div>
    );
  }

  if ((!tracks || tracks.length === 0) && artists && artists.length > 0) {
    return (
      <div className={classes.favoriteSection}>
        <ArtistSlider artists={artists} lang={currentLanguage} />
        <QueryPlaceholder
          lang={currentLanguage}
          variant="empty"
          alternativeMessage={messagePlaceholder[currentLanguage].track}
        />
      </div>
    );
  }

  return (
    <div className={classes.favoriteSection}>
      <ArtistSlider artists={artists || []} lang={currentLanguage} />
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
        lang={currentLanguage}
      />
    </div>
  );
};

export default FavoriteSectionWidget;
