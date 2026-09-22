import classes from '@shared/ui/skeletons/profile-info-skeleton/ProfileInfoSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProfileInfoSkeleton = () => {
  return (
    <div className={classes.profileInfoSkeleton}>
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
        <div className={classes.profileInfoSkeletonTopSection}>
          <div className={classes.profileInfoSkeletonAvatar}>
            <Skeleton width="100%" height="100%" circle />
          </div>
          <ul className={classes.profileInfoSkeletonList}>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.profileInfoSkeletonBottomSection}>
          <div className={classes.profileInfoSkeletonButtons}>
            <Skeleton className={classes.profileInfoSkeletonButton} />
            <Skeleton className={classes.profileInfoSkeletonButton} />
          </div>
          <ul className={classes.profileInfoSkeletonList}>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
            <li className={classes.profileInfoSkeletonItem}>
              <div className={classes.profileInfoSkeletonText}>
                <Skeleton height="100%" />
              </div>
            </li>
          </ul>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ProfileInfoSkeleton;
