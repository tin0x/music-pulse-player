import React from 'react';
import classes from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import clsx from 'clsx';
import type { TopTracksSkeletonProps } from '@shared/ui/skeletons/top-tracks-skeleton/types.ts';

const TopTracksSkeleton: React.FC<TopTracksSkeletonProps> = ({ className, quantityTracks, isShowLink }) => {
  return (
    <div className={clsx(className, classes.topTracksSkeleton)}>
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
        <div className={classes.topTracksSkeletonTopBar}>
          <Skeleton width="11.2rem" height="1.5rem" />
          {isShowLink && <Skeleton className={classes.topTracksSkeletonHidden} width="11.2rem" height="1.5rem" />}
        </div>
        <ul className={classes.topTracksSkeletonList}>
          {Array.from({ length: quantityTracks || 5 }).map((_, i) => (
            <li key={i}>
              <div className={classes.topTracksSkeletonItem}>
                <div className={classes.topTracksSkeletonWrapper}>
                  <div className={classes.topTracksSkeletonLeftBlock}>
                    <Skeleton className={classes.topTracksSkeletonHidden} width="2.2rem" height="2.2rem" />
                    <div className={classes.topTracksSkeletonInfo}>
                      <Skeleton circle width="3.6rem" height="3.6rem" />
                      <div className={classes.topTracksSkeletonDescription}>
                        <Skeleton width="12rem" height="1.4rem" />
                      </div>
                    </div>
                  </div>
                  <div className={classes.topTracksSkeletonRightBlock}>
                    <Skeleton className={classes.topTracksSkeletonHidden} width="3.3rem" height="1.4rem" />
                    <Skeleton className={classes.topTracksSkeletonHidden} width="1.4rem" height="1.6rem" />
                    <Skeleton width="1.1rem" height="1.6rem" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SkeletonTheme>
    </div>
  );
};

export default TopTracksSkeleton;
