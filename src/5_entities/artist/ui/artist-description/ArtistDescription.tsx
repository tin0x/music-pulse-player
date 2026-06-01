import React from 'react';
import classes from '@entities/artist/ui/artist-description/ArtistDescription.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import clsx from 'clsx';
import type { ArtistDescriptionProps } from '@entities/artist/types.ts';
import iconAvatar from '@shared/assets/images/human.webp';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ArtistDescription: React.FC<ArtistDescriptionProps> = ({ artist, renderActionToggleFavorite, lang }) => {
  const { avatar, name, bio, albumCount, followerCount, trackCount, location } = artist;

  const t = getTranslate(lang);

  return (
    <div className={classes.artistDescription}>
      <Avatar
        className={classes.artistDescriptionAvatar}
        alt="artist avatar"
        type="user"
        isActive={true}
        src={avatar || iconAvatar}
      />
      <div className={classes.artistDescriptionBlock}>
        <span className={classes.artistDescriptionText}>
          {t.str.nameArtist}
          <div className={classes.artistDescriptionSubtextWrapper}>
            <span className={clsx(classes.artistDescriptionSubtext, classes.artistDescriptionSubtextMarquee)}>
              {name}
            </span>
          </div>
        </span>
        <span className={classes.artistDescriptionText}>
          {t.str.locationArtist}
          <span className={classes.artistDescriptionSubtext}>{location}</span>
        </span>
        <span className={classes.artistDescriptionText}>
          {t.str.albumsArtist}
          <span className={classes.artistDescriptionSubtext}>{albumCount}</span>
        </span>
        <span className={classes.artistDescriptionText}>
          {t.str.followersArtist}
          <span className={classes.artistDescriptionSubtext}>{followerCount}</span>
        </span>
        <span className={classes.artistDescriptionText}>
          {t.str.tracksArtist}
          <span className={classes.artistDescriptionSubtext}>{trackCount}</span>
        </span>
        <span className={`${classes.artistDescriptionText} ${classes.artistDescriptionTextAdaptive}`}>
          {t.str.bioArtist}
          <br />
          <p className={classes.artistDescriptionTextDescription}>{bio}</p>
        </span>
        {renderActionToggleFavorite()}
      </div>
    </div>
  );
};

export default ArtistDescription;
