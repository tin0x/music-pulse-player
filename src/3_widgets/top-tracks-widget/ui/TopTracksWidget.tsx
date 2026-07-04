import React from 'react';
import classes from '@widgets/top-tracks-widget/ui/TopTracksWidget.module.scss';
import TrackList from '@entities/track/ui/tracks/track-list/TrackList.tsx';
import { useFetchTrendingTracks } from '@widgets/top-tracks-widget/model/useFetchTrendingTracks.ts';
import clsx from 'clsx';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { TopTracksWidgetProps } from '@widgets/top-tracks-widget/types.ts';
import { useInitTopTracksWidget } from '@widgets/top-tracks-widget/model/useInitTopTracksWidget.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';

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

  const lang = useAppSelector(getCurrentLanguage);

  if (isLoading || isFetching) {
    return <TopTracksSkeleton className={className} isShowLink={isLinkShowMore} quantityTracks={tracksLimitPerPage} />;
  }

  if (error) {
    return <QueryPlaceholder lang={lang} className={className} variant="queryError" onClick={refetch} />;
  }

  if (!tracks || tracks.length === 0) {
    return <QueryPlaceholder lang={lang} className={className} variant="empty" />;
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
      lang={lang}
    />
  );
};

export default TopTracksWidget;
