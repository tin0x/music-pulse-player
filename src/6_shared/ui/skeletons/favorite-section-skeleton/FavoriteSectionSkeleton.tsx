import React, { useState } from 'react';
import classes from '@shared/ui/skeletons/favorite-section-skeleton/FavoriteSectionSkeleeton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';

const FavoriteSectionSkeleton: React.FC = () => {
  const [size] = useState(() => (window.innerWidth <= 768 ? '10rem' : '18.4rem'));

  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.favoriteSectionSkeleton}>
        <div className={classes.favoriteSectionSkeletonArtists}>
          <Skeleton width="11.2rem" height="1.5rem" />
          <ul className={classes.favoriteSectionSkeletonArtistsList}>
            <Skeleton circle width={size} height={size} />
            <Skeleton circle width={size} height={size} />
            <Skeleton circle width={size} height={size} />
            <Skeleton circle width={size} height={size} />
          </ul>
        </div>
        <TopTracksSkeleton quantityTracks={10} isShowLink />
      </div>
    </SkeletonTheme>
  );
};

export default FavoriteSectionSkeleton;
