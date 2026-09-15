import useLanguage from '@app/providers/language/useLanguage';
import { TrackDescription, TrackList } from '@entities/track';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ArtistDescriptionSkeleton from '@shared/ui/skeletons/artist-description-skeleton/ArtistDescriptionSkeleton.tsx';
import { useInitTrackInfoWidget } from '@widgets/track-info-widget/model/useInitTrackInfoWidget.tsx';
import type { TrackInfoWidgetProps } from '@widgets/track-info-widget/types.ts';
import classes from '@widgets/track-info-widget/ui/TrackInfoWidget.module.scss';
import React from 'react';

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

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  if (isLoading) {
    return <ArtistDescriptionSkeleton quantityTracks={1} />;
  }

  if (error) {
    return <QueryPlaceholder lang={currentLanguage} variant="queryError" onClick={() => refetch()} />;
  }

  if (!data || data.length === 0) {
    return <QueryPlaceholder lang={currentLanguage} variant="empty" />;
  }

  const [currentTrack] = data;

  return (
    <div className={classes.trackInfo}>
      <TrackDescription
        track={currentTrack}
        renderActionToggleFavorite={renderActionToggleFavorite}
        lang={currentLanguage}
      />
      <TrackList
        subtitle={t.str.titleTrack}
        tracks={data}
        isBuffering={isBuffering}
        isPlaying={isPlaying}
        renderDuration={renderDurationChange}
        currentTrackId={currentTrackId || ''}
        renderAction={renderAction}
        lang={currentLanguage}
      />
    </div>
  );
};

export default TrackInfoWidget;
