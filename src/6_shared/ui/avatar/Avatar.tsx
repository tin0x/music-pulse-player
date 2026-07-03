import React, { useState } from 'react';
import type { AvatarProps } from '@shared/ui/avatar/types.ts';
import clsx from 'clsx';
import classes from '@shared/ui/avatar/Avatar.module.scss';
import imagePoster from '@shared/assets/images/сover-track.webp';
import imageHuman from '@shared/assets/images/human.webp';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Avatar: React.FC<AvatarProps> = React.memo(
  ({ className, src, type, alt, isActive, isThisPlayingTrack, isPlaying, isBuffering, pathTo }) => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(!!src);

    const sourceAvatar = src && src.trim() !== '' ? src : type === 'track' ? imagePoster : imageHuman;
    const errorAvatar = type === 'track' ? imagePoster : imageHuman;

    const content = (
      <div
        className={clsx(className, classes.avatar, {
          [classes.avatarBorder]: isActive,
          [classes.avatarAnimation]: isThisPlayingTrack && isPlaying && !isBuffering,
        })}
        lang="en"
      >
        {isLoading && (
          <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
            <Skeleton circle width="100%" height="100%" />
          </SkeletonTheme>
        )}
        <img
          className={clsx(classes.avatarImage, {
            [classes.avatarHidden]: isLoading,
          })}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          src={isError ? errorAvatar : sourceAvatar}
          alt={alt}
          lang="en"
        />
      </div>
    );

    if (pathTo && pathTo.trim() !== '') {
      return <Link to={pathTo}>{content}</Link>;
    }

    return content;
  },
);

export default Avatar;
