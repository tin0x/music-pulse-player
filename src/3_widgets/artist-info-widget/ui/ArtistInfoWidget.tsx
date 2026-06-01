import React from 'react';
import classes from '@widgets/artist-info-widget/ui/ArtistInfoWidget.module.scss';
import ArtistDescription from '@entities/artist/ui/artist-description/ArtistDescription.tsx';
import type { ArtistInfoWidgetProps } from '@widgets/artist-info-widget/types.ts';
import { useInitArtistInfoWidget } from '@widgets/artist-info-widget/model/useInitArtistInfoWidget.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import PageSwitcher from '@features/pagination-controls/ui/page-switcher/PageSwitcher.tsx';
import { usePagination } from '@features/pagination-controls/model/usePagination.ts';
import TrackList from '@entities/track/ui/tracks/track-list/TrackList.tsx';
import ArtistDescriptionSkeleton from '@shared/ui/skeletons/artist-description-skeleton/ArtistDescriptionSkeleton.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

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

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (isLoading) {
    return <ArtistDescriptionSkeleton quantityTracks={10} />;
  }

  if (isError) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={handleRefetch} />;
  }

  if (!artist || !tracks || tracks.length === 0) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  return (
    <div className={classes.artistInfo}>
      <ArtistDescription artist={artist} renderActionToggleFavorite={renderActionToggleFavorite} lang={lang} />
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
        lang={lang}
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
