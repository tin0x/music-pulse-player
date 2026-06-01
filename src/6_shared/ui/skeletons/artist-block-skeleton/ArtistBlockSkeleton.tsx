import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import classes from '@shared/ui/skeletons/artist-block-skeleton/ArtistBlockSkeleton.module.scss';

const ArtistBlockSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.artistBlockSkeleton}>
        <div className={classes.artistBlockSkeletonWrapper}>
          <Skeleton width="8rem" height="1.2rem" />
        </div>
        <div className={classes.artistBlockSkeletonData}>
          <ul className={classes.artistBlockSkeletonList}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li className="artistBlockSkeletonItem" key={i}>
                <div className={classes.artistBlockSkeletonWrapper}>
                  <div className={classes.artistBlockSkeletonInfo}>
                    <Skeleton circle width="3.2rem" height="3.2rem" />
                    <div className={classes.artistBlockSkeletonDescription}>
                      <Skeleton width="7.5rem" height="1rem" />
                      <Skeleton width="5rem" height="0.7rem" />
                    </div>
                  </div>
                  <Skeleton width="1.2rem" height="1rem" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ArtistBlockSkeleton;
