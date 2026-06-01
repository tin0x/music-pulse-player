import React from 'react';
import type { TrackDescriptionProps } from '@entities/track/types.ts';
import classes from '@entities/track/ui/tracks/track-description/TrackDescription.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import imageTrack from '@shared/assets/images/сover-track.webp';
import imageAvatar from '@shared/assets/images/human.webp';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { formatDate } from '@shared/lib/utils/ui/formatDate.ts';
import { formatTimeTrack } from '@shared/lib/utils/ui/formatTimeTrack.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const TrackDescription: React.FC<TrackDescriptionProps> = ({ track, renderActionToggleFavorite, lang }) => {
  const { id, cover, title, genre, duration, favorite, release, user, userId } = track;

  const t = getTranslate(lang);

  return (
    <div className={classes.trackDescription}>
      <Avatar
        className={classes.trackDescriptionPoster}
        isActive={true}
        alt="track poster"
        type="track"
        src={cover || imageTrack}
      />
      <div className={classes.trackDescriptionBlock}>
        <div className={classes.trackDescriptionArtist}>
          <Avatar
            className={classes.trackDescriptionArtistAvatar}
            alt="artist avatar"
            type="user"
            src={user.avatar || imageAvatar}
          />
          <Link className={classes.trackDescriptionArtistLink} to={`/artist/${userId}`}>
            {user.name}
          </Link>
        </div>
        <span className={`${classes.trackDescriptionText} ${classes.trackDescriptionTextAdaptive}`}>
          {t.str.nameTrack}
          <div className={classes.trackDescriptionSubtextWrapper}>
            <span className={clsx(classes.trackDescriptionSubtext, classes.trackDescriptionSubtextMarquee)}>
              {title}
            </span>
          </div>
        </span>
        <span className={classes.trackDescriptionText}>
          {t.str.genreTrack}
          <span className={classes.trackDescriptionSubtext}>{genre}</span>
        </span>
        <span className={classes.trackDescriptionText}>
          {t.str.durationTrack}
          <span className={classes.trackDescriptionSubtext}>{formatTimeTrack(duration)}</span>
        </span>
        <span className={classes.trackDescriptionText}>
          {t.str.releaseTrack}
          <span className={classes.trackDescriptionSubtext}>{release ? formatDate(release) : 'empty'}</span>
        </span>
        <span className={classes.trackDescriptionText}>
          {t.str.likesTrack}
          <span className={classes.trackDescriptionSubtext}>{favorite || 0}</span>
        </span>
        {renderActionToggleFavorite(id)}
      </div>
    </div>
  );
};

export default TrackDescription;
