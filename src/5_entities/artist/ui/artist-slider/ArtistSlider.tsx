import React from 'react';
import clsx from 'clsx';
import classes from '@entities/artist/ui/artist-slider/ArtistSlider.module.scss';
import Subtitle from '@shared/ui/subtitle/Subtitle.tsx';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import IconSong from '@shared/assets/icons/song.svg?react';
import ArtistPreview from '@entities/artist/ui/artist-preview/ArtitsPreview.tsx';
import type { ArtistSliderProps } from '@entities/artist/types.ts';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import imageDots from '@shared/assets/images/dots.webp';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ArtistSlider: React.FC<ArtistSliderProps> = React.memo(({ className, artists, limitSlides = 10, lang }) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' });

  const t = getTranslate(lang);

  const filteredArtists = artists.slice(0, limitSlides);

  return (
    <div className={clsx(className, classes.artistSlider)}>
      <Subtitle text={t.str.titleArtistsFavorite} Icon={IconSong} />
      <div className={classes.artistSliderViewport} ref={emblaRef}>
        <ul className={classes.artistSliderContainer}>
          {filteredArtists.map((item) => (
            <li key={item.id} className={classes.artistSliderItem}>
              <ArtistPreview
                className={classes.artistSliderSlide}
                classNameAvatar={classes.artistSliderAvatar}
                name={item.name}
                avatar={item.avatar}
                pathTo={`/artist/${item.id}`}
              />
            </li>
          ))}
          {artists.length > 10 && (
            <li className={classes.artistSliderItem}>
              <Link className={classes.artistSliderSlide} to={`/favorite/artists`}>
                <Avatar className={classes.artistSliderSlide} alt="open more artists" type="user" src={imageDots} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
});

export default ArtistSlider;
