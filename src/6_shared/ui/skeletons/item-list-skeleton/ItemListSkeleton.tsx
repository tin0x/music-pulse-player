import React from 'react';
import classes from '@shared/ui/skeletons/item-list-skeleton/ItemListSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import type { ItemListSkeletonProps } from '@shared/ui/skeletons/item-list-skeleton/types.ts';

const ItemListSkeleton: React.FC<ItemListSkeletonProps> = ({ quantityItems, isSubtitle }) => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-hightlight)">
      <div className={classes.itemListSkeleton}>
        <div className={classes.itemListSkeletonTopBar}>
          <Skeleton width="18.7rem" height="2.5rem" />
          <Skeleton width="12.5rem" height="1.8rem" />
        </div>
        <ul className={classes.itemListSkeletonList}>
          {Array.from({ length: quantityItems || 20 }).map((_, i) => (
            <li className={classes.itemListSkeletonItem} key={i}>
              <Skeleton circle width="12.1rem" height="12.1rem" />
              {isSubtitle && <Skeleton width="8rem" height="1.5rem" />}
            </li>
          ))}
        </ul>
      </div>
    </SkeletonTheme>
  );
};

export default ItemListSkeleton;
