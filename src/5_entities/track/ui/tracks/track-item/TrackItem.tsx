import React from 'react';
import MediaItem from '@shared/ui/media-item/MediaItem.tsx';
import type { TrackItemProps } from '@entities/track/types.ts';
import coverTrack from '@shared/assets/images/сover-track.webp';
import classes from '@entities/track/ui/tracks/track-item/TrackItem.module.scss';
import clsx from 'clsx';

const TrackItem: React.FC<TrackItemProps> = ({
  id,
  index,
  avatar,
  title,
  duration,
  isActive,
  beforeDuration,
  actionSlot,
  trackIdParam,
  pathTo,
  isTrackActive,
}) => {
  return (
    <MediaItem
      className={clsx(classes.trackItem, { [classes.trackItemActive]: isActive })}
      classNameAvatar={classes.trackItemAvatar}
      index={index?.toString().padStart(2, '0')}
      srcAvatar={avatar ?? coverTrack}
      title={title}
      duration={duration}
      durationSize="large"
      isBorder={id === trackIdParam || isTrackActive}
      slots={{
        beforeDuration: beforeDuration,
        action: actionSlot,
      }}
      pathTo={pathTo}
      alt="artist avatar"
    />
  );
};

export default TrackItem;
