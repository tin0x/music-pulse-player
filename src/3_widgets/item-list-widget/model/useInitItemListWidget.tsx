import { useGetArtistsByIdsQuery } from '@entities/artist/api/artistApi.ts';
import { useFetchFavoritesQuery } from '@entities/favorite';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useGetTracksByIdsQuery } from '@entities/track/api/trackApi.ts';
import type { Track } from '@entities/track/types.ts';
import { DurationChange } from '@features/duration-change';
import { TogglePlayback } from '@features/player-controls';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useCallback } from 'react';

const EMPTY_IDS: string[] = [];

export const useInitItemListWidget = (paramType: string) => {
  const {
    data,
    isLoading: isLoadingFavorites,
    error: errorFavorites,
    refetch: refetchFavorites,
  } = useFetchFavoritesQuery();

  const isTracks = paramType === 'tracks';
  const ids = (isTracks ? data?.tracks : data?.artists) ?? EMPTY_IDS;

  const responseArtists = useGetArtistsByIdsQuery(!isTracks && ids.length > 0 ? { ids } : skipToken);
  const responseTracks = useGetTracksByIdsQuery(isTracks && ids.length > 0 ? { ids } : skipToken);

  const array = ids.length === 0 ? [] : isTracks ? responseTracks.data : responseArtists.data;

  const isLoading = isLoadingFavorites || responseArtists.isLoading || responseTracks.isLoading;
  const isError = !!(errorFavorites || responseTracks.error || responseArtists.error);

  const refetch = () => {
    refetchFavorites();
    if (isTracks) responseTracks.refetch();
    else responseArtists.refetch();
  };

  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);

  const renderAction = useCallback(
    (track: Track) => (
      <TogglePlayback
        track={{
          id: track.id,
          source: track.streamUrl,
          poster: track.cover,
          name: track.title,
          artist: {
            id: track.user.id,
            name: track.user.name,
          },
        }}
        playerContext={{
          type: 'favorite',
          params: {
            ids,
            limit: ids.length,
          },
        }}
      />
    ),
    [ids],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  return {
    array,
    isLoading,
    isError,
    refetch,
    isPlaying,
    isBuffering,
    currentTrackId,
    renderDurationChange,
    renderAction,
  };
};
