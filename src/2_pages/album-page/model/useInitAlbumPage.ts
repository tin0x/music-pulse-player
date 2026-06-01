import { useSearchParams } from 'react-router-dom';
import type { TracksByGenreArgs } from '@entities/album/types.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useInitAlbumPage = () => {
  const [searchParams] = useSearchParams();

  const genre = (searchParams.get('genre') || 'House') as TracksByGenreArgs['genre'];

  const limit = searchParams.get('limit');
  const tracksLimitPerPage = limit ? parseInt(limit) : undefined;

  const page = searchParams.get('page');
  const currentPage = page ? parseInt(page) : 1;

  const totalTracks = 300;

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return { genre, tracksLimitPerPage, currentPage, totalTracks, t };
};
