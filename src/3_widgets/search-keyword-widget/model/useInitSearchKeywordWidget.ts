import useLanguage from '@app/providers/language/useLanguage';
import {
  useGetArtistsFromSearchResultQuery,
  useGetTracksFromSearchResultQuery,
} from '@entities/search/api/searchApi.ts';
import { useDebounce } from '@shared/lib/hooks/api/useDebounce.ts';
import { useMemo, useState } from 'react';

export const useInitSearchKeywordWidget = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 600);
  const isEmpty = debouncedValue.length <= 2;

  const { currentLanguage } = useLanguage();

  const {
    data: tracks = [],
    isLoading: isLoadingTracks,
    isFetching: isFetchingTracks,
  } = useGetTracksFromSearchResultQuery({ query: debouncedValue, limit: 3 }, { skip: isEmpty });
  const {
    data: artists = [],
    isLoading: isLoadingArtists,
    isFetching: isFetchingArtists,
  } = useGetArtistsFromSearchResultQuery({ query: debouncedValue, limit: 3 }, { skip: isEmpty });

  const mixedArray = useMemo(() => {
    if (isEmpty) return [];
    return [...tracks, ...artists];
  }, [tracks, artists, isEmpty]);

  const isLoading = isLoadingTracks || isLoadingArtists || isFetchingTracks || isFetchingArtists;

  return { value, setValue, mixedArray, isLoading, lang: currentLanguage };
};
