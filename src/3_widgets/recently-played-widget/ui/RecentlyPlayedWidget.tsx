import React from 'react';
import RecentlyPlayedList from '@entities/track/ui/tracks/recently-played-list/RecentlyPlayedList.tsx';
import { useFetchRecentlyPlayedTracks } from '@widgets/recently-played-widget/model/useFetchRecentlyPlayedTracks.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import RecentlyPlayedSkeleton from '@shared/ui/skeletons/recently-played-skeleton/RecentlyPlayedSkeleton.tsx';
import { useInitRecentlyPlayedWidget } from '@widgets/recently-played-widget/model/useInitRecentlyPlayedWidget.tsx';
import { useIsAuth } from '@features/auth/model/hooks/useFetchToken.ts';

const RecentlyPlayedWidget: React.FC = () => {
  const { lang, renderTogglePlayback } = useInitRecentlyPlayedWidget();
  const { isAuth } = useIsAuth();
  const {
    data: playedTracks,
    isLoading,
    error,
    refetch,
    isEmpty,
    id: trackIdParam,
    isPlaying,
  } = useFetchRecentlyPlayedTracks();

  if (isLoading || !isAuth) {
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
