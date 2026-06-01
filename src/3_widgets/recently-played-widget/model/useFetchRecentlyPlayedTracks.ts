import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsPlaying, getRecentlyPlayedTracks } from '@entities/player/model/selectors.ts';
import { useGetTracksByIdsQuery } from '@entities/track/api/trackApi.ts';
import { useParams } from 'react-router-dom';

export const useFetchRecentlyPlayedTracks = () => {
  const rawRecentlyPlayedTracks = useAppSelector(getRecentlyPlayedTracks);
  const isPlaying = useAppSelector(getIsPlaying);

  const isEmpty = rawRecentlyPlayedTracks.length === 0;

  const { data, isLoading, error, refetch } = useGetTracksByIdsQuery(
    { ids: rawRecentlyPlayedTracks },
    { skip: isEmpty },
  );

  const { id } = useParams();

  return { data, isLoading, error, refetch, isEmpty, id, isPlaying };
};
