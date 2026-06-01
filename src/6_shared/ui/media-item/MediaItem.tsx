import React from 'react';
import classes from '@shared/ui/media-item/MediaItem.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import clsx from 'clsx';
import type { MediaItemProps } from '@shared/ui/media-item/types.ts';

const MediaItem: React.FC<MediaItemProps> = ({
  className,
  classNameAvatar,
  index,
  srcAvatar,
  alt,
  title,
  subtext,
  duration,
  isBorder,
  pathTo,
  refElement,
  slots,
}) => {
  return (
    <div className={clsx(className, classes.mediaItem)}>
      <div className={classes.mediaItemWrapper}>
        <div className={classes.mediaItemLeftBlock}>
          {index && <span className={classes.mediaItemNumber}>{index}</span>}
          <div className={classes.mediaItemInfo}>
            <Avatar
              className={classNameAvatar}
              alt={alt}
              key={srcAvatar}
              type={duration || !subtext ? 'track' : 'user'}
              src={srcAvatar}
              isActive={isBorder}
              pathTo={pathTo ? pathTo : ''}
            />
            <div className={classes.mediaItemDescription}>
              <span className={classes.mediaItemTitle}>{title}</span>
              {subtext && <span className={classes.mediaItemSubtext}>{subtext}</span>}
            </div>
          </div>
        </div>

        <div className={classes.mediaItemRightBlock}>
          {duration}
          {slots?.beforeDuration}
          <div className={classes.mediaItemButtonWrapper} ref={refElement}>
            {slots?.action}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
