import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import TopTracksSkeleton from '@shared/ui/skeletons/top-tracks-skeleton/TopTracksSkeleton.tsx';
import classes from '@shared/ui/skeletons/filtered-tracks-skeleton/FilteredTracksSkeleton.module.scss';

const FilteredTracksSkeleton: React.FC = () => {
  return (
    <div className={classes.filteredTracksSkeleton}>
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
        <div className={classes.filteredTracksSkeletonSortingSelect}>
          <Skeleton width="100%" height="7rem" />
          <Skeleton width="100%" height="7rem" />
        </div>
        <TopTracksSkeleton quantityTracks={10} />
        <div className={classes.filteredTracksSkeletonPageSwitcher}>
          <Skeleton width="100%" height="4.5rem" borderRadius="var(--radius-md)" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default FilteredTracksSkeleton;
