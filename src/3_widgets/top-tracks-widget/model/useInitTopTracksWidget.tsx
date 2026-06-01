import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useCallback } from 'react';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import type { Track } from '@entities/track/types.ts';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitTopTracksWidget = (tracksLimitPerPage: number) => {
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);

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
          type: 'trending',
          params: {
            limit: tracksLimitPerPage,
          },
        }}
      />
    ),
    [tracksLimitPerPage],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  return { currentTrackId, isPlaying, isBuffering, renderTrackAction, renderDurationChange };
};
