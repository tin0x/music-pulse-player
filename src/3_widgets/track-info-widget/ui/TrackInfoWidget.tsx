import React from 'react';
import { useInitTrackInfoWidget } from '@widgets/track-info-widget/model/useInitTrackInfoWidget.tsx';
import classes from '@widgets/track-info-widget/ui/TrackInfoWidget.module.scss';
import type { TrackInfoWidgetProps } from '@widgets/track-info-widget/types.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ArtistDescriptionSkeleton from '@shared/ui/skeletons/artist-description-skeleton/ArtistDescriptionSkeleton.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { TrackDescription, TrackList } from '@entities/track';

const TrackInfoWidget: React.FC<TrackInfoWidgetProps> = ({ trackIdParam }) => {
  const {
    data,
    isPlaying,
    isLoading,
    isBuffering,
    error,
    currentTrackId,
    renderAction,
    renderActionToggleFavorite,
    renderDurationChange,
    refetch,
  } = useInitTrackInfoWidget(trackIdParam);

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (isLoading) {
    return <ArtistDescriptionSkeleton quantityTracks={1} />;
  }

  if (error) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={() => refetch()} />;
  }

  if (!data || data.length === 0) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  const [currentTrack] = data;

  return (
    <div className={classes.trackInfo}>
      <TrackDescription track={currentTrack} renderActionToggleFavorite={renderActionToggleFavorite} lang={lang} />
      <TrackList
        subtitle={t.str.titleTrack}
        tracks={data}
        isBuffering={isBuffering}
        isPlaying={isPlaying}
        renderDuration={renderDurationChange}
        currentTrackId={currentTrackId || ''}
        renderAction={renderAction}
        lang={lang}
      />
    </div>
  );
};

export default TrackInfoWidget;
