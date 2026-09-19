import imageHuman from '@shared/assets/images/human.webp';
import imagePoster from '@shared/assets/images/сover-track.webp';
import classes from '@shared/ui/avatar/Avatar.module.scss';
import type { AvatarProps } from '@shared/ui/avatar/types.ts';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Avatar: React.FC<AvatarProps> = React.memo(
  ({ className, src, type, alt, isActive, isThisPlayingTrack, isPlaying, isSourceLoading, isBuffering, pathTo }) => {
    const [isError, setIsError] = useState(false);

    const hasCustomSrc = Boolean(src && src.trim() !== '');
    const [isImageLoading, setIsImageLoading] = useState(hasCustomSrc);

    const showSkeleton = isSourceLoading || (hasCustomSrc && isImageLoading);

    const sourceAvatar = hasCustomSrc ? src : type === 'track' ? imagePoster : imageHuman;
    const errorAvatar = type === 'track' ? imagePoster : imageHuman;

    useEffect(() => {
      setIsError(false);
      setIsImageLoading(hasCustomSrc);
    }, [src, hasCustomSrc]);

    const content = (
      <div
        className={clsx(className, classes.avatar, {
          [classes.avatarBorder]: isActive,
          [classes.avatarAnimation]: isThisPlayingTrack && isPlaying && !isBuffering,
        })}
        lang="en"
      >
        {showSkeleton && (
          <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
            <Skeleton circle width="100%" height="100%" />
          </SkeletonTheme>
        )}
        <img
          className={clsx(classes.avatarImage, {
            [classes.avatarHidden]: showSkeleton,
          })}
          onLoad={() => setIsImageLoading(false)}
          onError={() => {
            setIsError(true);
            setIsImageLoading(false);
          }}
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
