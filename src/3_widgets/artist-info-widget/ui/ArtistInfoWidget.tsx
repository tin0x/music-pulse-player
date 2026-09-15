import useLanguage from '@app/providers/language/useLanguage';
import { ArtistDescription } from '@entities/artist';
import { TrackList } from '@entities/track';
import { PageSwitcher } from '@features/pagination-controls';
import { usePagination } from '@features/pagination-controls/model/usePagination.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ArtistDescriptionSkeleton from '@shared/ui/skeletons/artist-description-skeleton/ArtistDescriptionSkeleton.tsx';
import { useInitArtistInfoWidget } from '@widgets/artist-info-widget/model/useInitArtistInfoWidget.tsx';
import type { ArtistInfoWidgetProps } from '@widgets/artist-info-widget/types.ts';
import classes from '@widgets/artist-info-widget/ui/ArtistInfoWidget.module.scss';
import React from 'react';

const ArtistInfoWidget: React.FC<ArtistInfoWidgetProps> = ({ artistIdParam, pageParam, limitParam }) => {
  const {
    artist,
    tracks,
    isLoading,
    handleRefetch,
    isError,
    totalTracks,
    isPlaying,
    isBuffering,
    currentTrackId,
    renderDurationChange,
    renderTrackAction,
    renderActionToggleFavorite,
  } = useInitArtistInfoWidget(artistIdParam, pageParam, limitParam);

  const {
    isFirstPage,
    isLastPage,
    maxPages,
    startPage,
    endPage,
    slicedPages,
    handleNextPage,
    handlePreviousPage,
    handleTargetPage,
  } = usePagination(totalTracks);

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  if (isLoading) {
    return <ArtistDescriptionSkeleton quantityTracks={10} />;
  }

  if (isError) {
    return <QueryPlaceholder lang={currentLanguage} variant="queryError" onClick={handleRefetch} />;
  }

  if (!artist || !tracks || tracks.length === 0) {
    return <QueryPlaceholder lang={currentLanguage} variant="empty" />;
  }

  return (
    <div className={classes.artistInfo}>
      <ArtistDescription
        artist={artist}
        renderActionToggleFavorite={renderActionToggleFavorite}
        lang={currentLanguage}
      />
      <TrackList
        subtitle={t.str.titleArtist}
        tracks={tracks}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentTrackId={currentTrackId || ''}
        renderDuration={renderDurationChange}
        currentPage={pageParam}
        tracksLimitPerPage={limitParam}
        renderAction={renderTrackAction}
        lang={currentLanguage}
      />
      <PageSwitcher
        className={classes.artistInfoPageSwitcher}
        maxPages={maxPages}
        currentPage={pageParam}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        startPage={startPage}
        endPage={endPage}
        slicedPages={slicedPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleTargetPage={handleTargetPage}
      />
    </div>
  );
};

export default ArtistInfoWidget;
