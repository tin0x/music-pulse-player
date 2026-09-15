import { RecentlyPlayedList } from '@entities/track';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import RecentlyPlayedSkeleton from '@shared/ui/skeletons/recently-played-skeleton/RecentlyPlayedSkeleton.tsx';
import { useFetchRecentlyPlayedTracks } from '@widgets/recently-played-widget/model/useFetchRecentlyPlayedTracks.ts';
import { useInitRecentlyPlayedWidget } from '@widgets/recently-played-widget/model/useInitRecentlyPlayedWidget.tsx';
import React from 'react';

const RecentlyPlayedWidget: React.FC = () => {
  const { lang, renderTogglePlayback } = useInitRecentlyPlayedWidget();
  const {
    data: playedTracks,
    isLoading,
    error,
    refetch,
    isEmpty,
    id: trackIdParam,
    isPlaying,
  } = useFetchRecentlyPlayedTracks();

  if (isLoading) {
    return <RecentlyPlayedSkeleton />;
  }

  if (error) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={refetch} />;
  }

  if (isEmpty) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  return (
    <RecentlyPlayedList
      playedTracks={playedTracks || []}
      actionSlot={renderTogglePlayback}
      trackIdParam={trackIdParam || ''}
      isPlaying={isPlaying}
      lang={lang}
    />
  );
};

export default RecentlyPlayedWidget;
