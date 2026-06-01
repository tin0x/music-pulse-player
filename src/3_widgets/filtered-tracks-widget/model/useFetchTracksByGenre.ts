import { useGetTracksByGenreQuery } from '@entities/album/api/albumApi.ts';
import type { FetchTracksByGenreArgs } from '@widgets/filtered-tracks-widget/types.ts';

export const useFetchTracksByGenre = ({
  genre,
  tracksLimitPerPage,
  offset,
  sortParam,
  moodParam,
}: FetchTracksByGenreArgs) => {
  const { data, isLoading, error, refetch, isFetching } = useGetTracksByGenreQuery({
    genre,
    limit: tracksLimitPerPage,
    offset,
    sortParam,
    moodParam,
  });

  return { data, isLoading, error, refetch, isFetching };
};
