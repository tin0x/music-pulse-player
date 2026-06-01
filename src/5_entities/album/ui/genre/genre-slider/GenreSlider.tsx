import React from 'react';
import classes from '@entities/album/ui/genre/genre-slider/GenreSlider.module.scss';
import GenreItem from '@entities/album/ui/genre/genre-item/GenreItem.tsx';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Subtitle from '@shared/ui/subtitle/Subtitle.tsx';
import IconSong from '@shared/assets/icons/song.svg?react';
import clsx from 'clsx';
import { albums } from '@entities/album/model/constants.ts';
import type { GenreSliderProps } from '@entities/album/types.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const GenreSlider: React.FC<GenreSliderProps> = ({ className, lang }) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' });
  const t = getTranslate(lang);

  return (
    <div className={clsx(className, classes.genreSlider)}>
      <Subtitle text={t.str.titleDiscoverGenre} Icon={IconSong} />
      <div
        className={classes.genreSliderViewport}
        ref={emblaRef}
        role="region"
        aria-label={t.str.titleDiscoverGenre}
        aria-roledescription="carousel"
      >
        <ul className={classes.genreSliderContainer}>
          {albums.map((item) => (
            <li key={item.title} className={classes.genreSliderItem}>
              <Link
                className={classes.genreSliderSlide}
                to={`/album?genre=${item.param}&page=1&limit=10&&sort=relevant&mood=other`}
              >
                <GenreItem src={item.poster} subTitle={t.str[item.title as keyof typeof t.str]} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenreSlider;

// &content=all
