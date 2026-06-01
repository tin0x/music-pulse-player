import React from 'react';
import ItemsContainer from '@shared/ui/items-container/ItemsContainer.tsx';
import classes from '@entities/track/ui/tracks/recently-played-list/RecentlyPlayedList.module.scss';
import TrackItem from '@entities/track/ui/tracks/track-item/TrackItem.tsx';
import type { RecentlyPlayedListProps } from '@entities/track/types.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const RecentlyPlayedList: React.FC<RecentlyPlayedListProps> = ({ playedTracks, actionSlot, trackIdParam, lang }) => {
  const t = getTranslate(lang);

  return (
    <ItemsContainer title={t.str.recentlyPlayedAside}>
      <ul className={classes.recentlyPlayedList}>
        {playedTracks.map((track) => (
          <li key={track.id} className={classes.recentlyPlayedItem}>
            <TrackItem
              id={track.id}
              avatar={track.cover}
              title={track.title}
              isActive={false}
              actionSlot={actionSlot?.(track)}
              trackIdParam={trackIdParam}
              pathTo={`/track/${track.id}`}
            />
          </li>
        ))}
      </ul>
    </ItemsContainer>
  );
};

export default RecentlyPlayedList;
