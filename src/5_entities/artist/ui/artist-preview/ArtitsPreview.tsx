import React from 'react';
import classes from '@entities/artist/ui/artist-preview/ArtistPreview.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import type { ArtistPreviewProps } from '@entities/artist/types.ts';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ArtistPreview: React.FC<ArtistPreviewProps> = ({ className, classNameAvatar, name, avatar, pathTo }) => {
  if (pathTo && pathTo.trim() !== '') {
    return (
      <div className={clsx(className, classes.artistPreview)}>
        <Link to={pathTo}>
          <Avatar
            className={clsx(classNameAvatar, classes.artistPreviewAvatar)}
            alt="artist avatar"
            type="user"
            src={avatar}
          />
        </Link>
        <span className={classes.artistPreviewSubtext}>{name}</span>
      </div>
    );
  }

  return (
    <div className={clsx(className, classes.artistPreview)}>
      <Avatar
        className={clsx(classNameAvatar, classes.artistPreviewAvatar)}
        alt="artist-avatar"
        type="user"
        src={avatar}
      />
      <span className={classes.artistPreviewSubtext}>{name}</span>
    </div>
  );
};

export default ArtistPreview;
