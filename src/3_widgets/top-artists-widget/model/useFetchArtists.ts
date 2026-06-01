import { useGetArtistsQuery } from '@entities/artist/api/artistApi.ts';
import { deriveTopArtists } from '@entities/artist/model/utils/deriveTopArtists.ts';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

export const useFetchArtists = (limit: number) => {
  const { data, isLoading, error, refetch, isFetching } = useGetArtistsQuery({ limit });

  const sortedArtists = useMemo(() => deriveTopArtists(data || [], 5), [data]);

  const { id } = useParams();

  return { sortedArtists, isLoading, error, refetch, isFetching, artistIdParam: id || '' };
};
