import useLanguage from '@app/providers/language/useLanguage';
import { TrackList } from '@entities/track';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';
import { useFetchTrendingTracks } from '@widgets/top-tracks-widget/model/useFetchTrendingTracks.ts';
import { useInitTopTracksWidget } from '@widgets/top-tracks-widget/model/useInitTopTracksWidget.tsx';
import type { TopTracksWidgetProps } from '@widgets/top-tracks-widget/types.ts';
import classes from '@widgets/top-tracks-widget/ui/TopTracksWidget.module.scss';
import clsx from 'clsx';
import React from 'react';

const TopTracksWidget: React.FC<TopTracksWidgetProps> = ({
  className,
  subtitle,
  tracksLimitPerPage,
  isLinkShowMore,
}) => {
  const {
    data: tracks,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useFetchTrendingTracks({ tracksLimitPerPage: tracksLimitPerPage ?? 50 });
  const { currentTrackId, isPlaying, isBuffering, renderTrackAction, renderDurationChange } = useInitTopTracksWidget(
    tracksLimitPerPage ?? 5,
  );

  const { currentLanguage } = useLanguage();

  if (isLoading || isFetching) {
    return <TopTracksSkeleton className={className} isShowLink={isLinkShowMore} quantityTracks={tracksLimitPerPage} />;
  }

  if (error) {
    return <QueryPlaceholder lang={currentLanguage} className={className} variant="queryError" onClick={refetch} />;
  }

  if (!tracks || tracks.length === 0) {
    return <QueryPlaceholder lang={currentLanguage} className={className} variant="empty" />;
  }

  return (
    <TrackList
      className={clsx(className, classes.topTracks)}
      subtitle={subtitle}
      tracks={tracks.slice(0, tracksLimitPerPage ?? 5) || []}
      renderAction={renderTrackAction}
      renderDuration={renderDurationChange}
      isLinkShowMore={isLinkShowMore ?? false}
      isPlaying={isPlaying}
      isBuffering={isBuffering}
      currentTrackId={currentTrackId ?? ''}
      pathTo="/tracks/trending"
      lang={currentLanguage}
    />
  );
};

export default TopTracksWidget;
