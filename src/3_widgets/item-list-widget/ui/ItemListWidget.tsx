import React from 'react';
import ArtistList from '@entities/artist/ui/artist-list/ArtistList.tsx';
import { useInitItemListWidget } from '@widgets/item-list-widget/model/useInitItemListWidget.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { ArtistProfile } from '@entities/artist/types.ts';
import type { ItemListWidgetProps } from '@widgets/item-list-widget/types.ts';
import TrackList from '@entities/track/ui/tracks/track-list/TrackList.tsx';
import type { Track } from '@entities/track/types.ts';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';
import ItemListSkeleton from '@shared/ui/skeletons/item-list-skeleton/ItemListSkeleton.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

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

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (isLoading && paramType === 'tracks') {
    return <TopTracksSkeleton quantityTracks={10} />;
  }

  if (isLoading && paramType === 'artists') {
    return <ItemListSkeleton isSubtitle />;
  }

  if (isError) {
    return <QueryPlaceholder lang={lang} variant="empty" onClick={refetch} />;
  }

  if (paramType === 'artists') {
    return <ArtistList artists={array as ArtistProfile[]} lang={lang} />;
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
        lang={lang}
      />
    );
  }
};

export default ItemListWidget;
