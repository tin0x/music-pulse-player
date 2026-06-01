import React from 'react';
import classes from '@shared/ui/skeletons/artist-description-skeleton/ArtistDescriptionSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';

const ArtistDescriptionSkeleton: React.FC<{ quantityTracks?: number }> = ({ quantityTracks }) => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.dataDescriptionSkeletonWrapper}>
        <div className={classes.dataDescriptionSkeleton}>
          <Skeleton circle width="18.4rem" height="18.4rem" />
          <div className={classes.dataDescriptionSkeletonBlock}>
            <Skeleton width="100%" height="1.8rem" />
            <Skeleton width="100%" height="1.8rem" />
            <Skeleton width="100%" height="1.8rem" />
            <Skeleton width="100%" height="1.8rem" />
            <Skeleton width="100%" height="1.8rem" />
            <Skeleton width="100%" height="1.8rem" />
          </div>
        </div>
        <TopTracksSkeleton quantityTracks={quantityTracks} />
      </div>
    </SkeletonTheme>
  );
};

export default ArtistDescriptionSkeleton;
