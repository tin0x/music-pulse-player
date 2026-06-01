import { useGetTrendingTracksQuery } from '@entities/track/api/trackApi.ts';

export const useFetchTrendingTracks = ({ tracksLimitPerPage }: { tracksLimitPerPage: number }) => {
  const { data, isLoading, error, refetch, isFetching } = useGetTrendingTracksQuery({
    limit: tracksLimitPerPage,
  });

  return { data, isLoading, error, refetch, isFetching };
};
