import { useGetArtistByIdQuery, useGetTracksByArtistIdQuery } from '@entities/artist/api/artistApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useCallback } from 'react';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import type { Track } from '@entities/track/types.ts';
import ToggleFavorite from '@features/toggle-favorite/ui/ToggleFavorite.tsx';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitArtistInfoWidget = (artistParamId: string, pageParam: number, limitParam: number) => {
  const offset = (pageParam - 1) * limitParam;

  const {
    data: artist,
    isLoading: isLoadingArtist,
    isFetching: isFetchingArtist,
    refetch: refetchArtists,
    error: errorArtist,
  } = useGetArtistByIdQuery(artistParamId ? { id: artistParamId } : skipToken);
  const {
    data: tracks,
    isLoading: isLoadingTracks,
    isFetching: isFetchingTracks,
    refetch: refetchTracks,
    error: errorTracks,
  } = useGetTracksByArtistIdQuery(artistParamId ? { id: artistParamId, limit: limitParam, offset } : skipToken);

  const isLoadingData = isLoadingTracks || isLoadingArtist;
  const isFetchingData = isFetchingTracks || isFetchingArtist;
  const isError = errorArtist || errorTracks;

  const totalTracks = artist ? artist.trackCount : 0;

  const handleRefetch = () => {
    refetchArtists();
    refetchTracks();
  };

  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);

  const renderTrackAction = useCallback(
    (track: Track) => (
      <TogglePlayback
        track={{
          id: track.id,
          source: track.streamUrl,
          poster: track.cover || '',
          name: track.title,
          artist: {
            id: track.user.id,
            name: track.user.name,
          },
        }}
        playerContext={{
          type: 'artist',
          params: {
            id: artistParamId,
            limit: limitParam,
            offset,
          },
        }}
      />
    ),
    [artistParamId, limitParam, offset],
  );

  const renderActionToggleFavorite = useCallback(
    () => <ToggleFavorite type="artist" id={artistParamId} variantButton="text" />,
    [artistParamId],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  return {
    artist,
    tracks,
    isLoading: isLoadingData || isFetchingData,
    handleRefetch,
    isError,
    totalTracks,
    isPlaying,
    isBuffering,
    currentTrackId,
    renderDurationChange,
    renderTrackAction,
    renderActionToggleFavorite,
  };
};
