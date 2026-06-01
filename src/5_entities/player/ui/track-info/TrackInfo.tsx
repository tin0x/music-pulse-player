import React from 'react';
import classes from '@entities/player/ui/track-info/TrackInfo.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import type { TrackInfoProps } from '@entities/player/types.ts';
import { Link } from 'react-router-dom';

const TrackInfo: React.FC<TrackInfoProps> = ({ poster, name, artist, isThisPlayingTrack, isPlaying, isBuffering }) => {
  return (
    <div className={classes.trackInfo}>
      <Avatar
        key={poster}
        className={classes.trackInfoAvatar}
        isActive={true}
        src={poster ?? ''}
        isThisPlayingTrack={isThisPlayingTrack}
        isBuffering={isBuffering}
        isPlaying={isPlaying}
        type="track"
        alt="track poster"
      />
      <div className={classes.trackInfoDescription}>
        <span className={classes.trackInfoTitle}>{name}</span>
        <Link className={classes.trackInfoSubtitle} to={`/artist/${artist.id}`}>
          {artist.name}
        </Link>
      </div>
    </div>
  );
};

export default TrackInfo;
