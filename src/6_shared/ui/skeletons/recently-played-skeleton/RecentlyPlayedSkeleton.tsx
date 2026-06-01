import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import classes from '@shared/ui/skeletons/recently-played-skeleton/RecentlyPlayedSkeleton.module.scss';

const RecentlyPlayedSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.recentlyPlayedSkeleton}>
        <div className={classes.recentlyPlayedSkeletonWrapper}>
          <Skeleton width="8rem" height="1.2rem" />
        </div>
        <div className={classes.recentlyPlayedSkeletonData}>
          <ul className={classes.recentlyPlayedSkeletonList}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li className="artistBlockSkeletonItem" key={i}>
                <div className={classes.recentlyPlayedSkeletonWrapper}>
                  <div className={classes.recentlyPlayedSkeletonInfo}>
                    <Skeleton circle width="3.2rem" height="3.2rem" />
                    <div className={classes.recentlyPlayedSkeletonDescription}>
                      <Skeleton width="7.5rem" height="1rem" />
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

export default RecentlyPlayedSkeleton;
