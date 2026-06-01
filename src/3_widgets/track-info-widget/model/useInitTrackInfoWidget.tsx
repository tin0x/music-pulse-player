import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTrackByIdQuery } from '@entities/track/api/trackApi.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useCallback } from 'react';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import type { Track } from '@entities/track/types.ts';
import ToggleFavorite from '@features/toggle-favorite/ui/ToggleFavorite.tsx';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitTrackInfoWidget = (trackIdParam: string) => {
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
          type: 'target',
          params: {
            id: trackIdParam,
            limit: 1,
          },
        }}
      />
    ),
    [trackIdParam],
  );

  const renderActionToggleFavorite = useCallback(
    () => <ToggleFavorite type="track" id={trackIdParam} variantButton="text" />,
    [trackIdParam],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  const {
    data,
    isLoading: isLoadingTrack,
    isFetching: isFetchingTrack,
    error,
    refetch,
  } = useGetTrackByIdQuery(trackIdParam ? { id: trackIdParam } : skipToken);

  return {
    data,
    isPlaying,
    isLoading: isLoadingTrack || isFetchingTrack,
    error,
    isBuffering,
    currentTrackId,
    renderAction,
    renderActionToggleFavorite,
    renderDurationChange,
    refetch,
  };
};
