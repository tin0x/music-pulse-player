import useLanguage from '@app/providers/language/useLanguage';
import { ArtistList } from '@entities/artist';
import type { ArtistProfile } from '@entities/artist/types.ts';
import { TrackList } from '@entities/track';
import type { Track } from '@entities/track/types.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ItemListSkeleton from '@shared/ui/skeletons/item-list-skeleton/ItemListSkeleton.tsx';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';
import { useInitItemListWidget } from '@widgets/item-list-widget/model/useInitItemListWidget.tsx';
import type { ItemListWidgetProps } from '@widgets/item-list-widget/types.ts';
import React from 'react';

const ItemListWidget: React.FC<ItemListWidgetProps> = ({ paramType }) => {
  const {
    array,
    isLoading,
    isError,
    refetch,
    isPlaying,
    isBuffering,
    currentTrackId,
    renderAction,
    renderDurationChange,
  } = useInitItemListWidget(paramType);

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  if (isLoading && paramType === 'tracks') {
    return <TopTracksSkeleton quantityTracks={10} />;
  }

  if (isLoading && paramType === 'artists') {
    return <ItemListSkeleton isSubtitle />;
  }

  if (isError) {
    return <QueryPlaceholder lang={currentLanguage} variant="empty" onClick={refetch} />;
  }

  if (paramType === 'artists') {
    return <ArtistList artists={array as ArtistProfile[]} lang={currentLanguage} />;
  }

  if (paramType === 'tracks') {
    return (
      <TrackList
        subtitle={`${t.str.titleTracksFavorite} (${array?.length})`}
        tracks={array as Track[]}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentTrackId={currentTrackId || ''}
        renderDuration={renderDurationChange}
        renderAction={renderAction}
        lang={currentLanguage}
      />
    );
  }
};

export default ItemListWidget;
