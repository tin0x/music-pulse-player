import React, { useRef, useState } from 'react';
import classes from '@entities/artist/ui/artist-item/ArtistItem.module.scss';
import MediaItem from '@shared/ui/media-item/MediaItem.tsx';
import { useClickOutside } from '@shared/lib/hooks/ui/useClickOutside.ts';
import type { ArtistItemProps } from '@entities/artist/types.ts';
import imageAvatar from '@shared/assets/images/human.webp';
import Button from '@shared/ui/button/Button.tsx';
import IconDots from '@shared/assets/icons/dots.svg?react';
import { Link } from 'react-router-dom';
import Dropdown from '@shared/ui/dropdown/Dropdown';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ArtistItem: React.FC<ArtistItemProps> = React.memo(
  ({ artist, isLast, artistIdParam, lang, renderActionToggleFavorite }) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const refElement = useRef<HTMLDivElement | null>(null);
    useClickOutside(refElement, () => setIsOpenDropdown(false));
    const toggleDropdown = () => setIsOpenDropdown((prev) => !prev);

    const t = getTranslate(lang);

    return (
      <MediaItem
        className={classes.artistItem}
        classNameAvatar={classes.artistItemAvatar}
        srcAvatar={!artist.avatar ? imageAvatar : artist.avatar}
        title={artist.name}
        subtext={`${artist.followerCount} ${t.str.followersArtistsAside}`}
        refElement={refElement}
        isBorder={artistIdParam === artist.id}
        pathTo={`/artist/${artist.id}?page=1`}
        alt="artist avatar"
        slots={{
          action: (
            <>
              <Button
                className={classes.artistItemButton}
                onClick={toggleDropdown}
                aria-label="open dropdown menu with links"
                lang="en"
              >
                <IconDots aria-hidden />
              </Button>
              <Dropdown className={classes.artistItemDropdown} isLast={isLast} isOpen={isOpenDropdown}>
                <ul className={classes.artistItemList}>
                  <Link className={classes.artistItemLink} to={`/artist/${artist.id}?page=1`}>
                    {t.str.dropdownValueGoProfile}
                  </Link>
                  {renderActionToggleFavorite(artist.id)}
                </ul>
              </Dropdown>
            </>
          ),
        }}
      />
    );
  },
);

export default ArtistItem;
