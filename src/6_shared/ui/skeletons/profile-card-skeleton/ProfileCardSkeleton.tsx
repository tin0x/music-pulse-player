import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import classes from '@shared/ui/skeletons/profile-card-skeleton/ProfileCardSkeleton.module.scss';

const ProfileCardSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.profileCardSkeletonWrapper}>
        <div className={classes.profileCardSkeletonInfo}>
          <Skeleton circle width="3.2rem" height="3.2rem" />
          <div className={classes.profileCardSkeletonDescription}>
            <Skeleton width="7.5rem" height="1rem" />
            <Skeleton width="5rem" height="0.7rem" />
          </div>
        </div>
        <Skeleton width="1.2rem" height="1rem" />
      </div>
    </SkeletonTheme>
  );
};

export default ProfileCardSkeleton;
