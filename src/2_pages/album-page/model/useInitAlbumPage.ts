import { useSearchParams } from 'react-router-dom';
import type { TracksByGenreArgs } from '@entities/album/types.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useEffect } from 'react';
import { genres, type GenreType, moodParams, sortingParams } from '@pages/album-page/model/constants.ts';

export const useInitAlbumPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre');
  const sort = searchParams.get('sort');
  const mood = searchParams.get('mood');
  const page = searchParams.get('page');

  const currentGenre = genre && genres.includes(genre as TracksByGenreArgs['genre']) ? (genre as GenreType) : 'House';
  const currentSort = sort && sortingParams.includes(sort as TracksByGenreArgs['sortParam']) ? sort : 'relevant';
  const currentMood = mood && moodParams.includes(mood as TracksByGenreArgs['moodParam']) ? mood : 'other';
  const currentPage = page && parseInt(page) <= 30 && parseInt(page) >= 1 ? parseInt(page) : 1;

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  useEffect(() => {
    const PARAMS_KEYS = ['genre', 'sort', 'mood', 'page'];

    const invalidGenre = !genre || !genres.includes(genre as GenreType);
    const invalidSort = !sort || !sortingParams.includes(sort);
    const invalidMood = !mood || !moodParams.includes(mood);
    const invalidPage = !page || parseInt(page) <= 0 || parseInt(page) > 30 || isNaN(parseInt(page));
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAMS_KEYS.includes(key));

    if (invalidGenre || invalidPage || invalidSort || invalidMood || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('genre', currentGenre);
          cleanParams.set('sort', currentSort);
          cleanParams.set('mood', currentMood);
          cleanParams.set('page', currentPage.toString());
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [searchParams, page, setSearchParams, genre, currentGenre, currentPage, sort, mood, currentSort, currentMood]);

  const totalTracks = 300;
  const tracksLimitPerPage = 10;

  return { currentGenre, tracksLimitPerPage, currentPage, totalTracks, t };
};
