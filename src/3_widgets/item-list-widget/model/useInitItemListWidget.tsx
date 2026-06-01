import { useGetArtistsByIdsQuery } from '@entities/artist/api/artistApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTracksByIdsQuery } from '@entities/track/api/trackApi.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getFavoriteList, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useCallback, useMemo } from 'react';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import type { Track } from '@entities/track/types.ts';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitItemListWidget = (paramType: string) => {
  const favoriteList = useAppSelector(getFavoriteList);

  const ids = paramType === 'tracks' ? favoriteList.tracks : favoriteList.artists;

  const responseArtists = useGetArtistsByIdsQuery(paramType === 'artists' && ids.length > 0 ? { ids } : skipToken);
  const responseTracks = useGetTracksByIdsQuery(paramType === 'tracks' && ids.length > 0 ? { ids } : skipToken);

  const array = useMemo(() => {
    return paramType === 'tracks' ? responseTracks.data : responseArtists.data;
  }, [paramType, responseArtists.data, responseTracks.data]);

  const isLoading = responseArtists.isLoading || responseTracks.isLoading;
  const isError = !!(responseTracks.error || responseArtists.error);
  const refetch = paramType === 'tracks' ? responseTracks.refetch : responseArtists.refetch;

  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const { tracks } = useAppSelector(getFavoriteList);

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
            limit: tracks.length,
          },
        }}
      />
    ),
    [ids, tracks],
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
