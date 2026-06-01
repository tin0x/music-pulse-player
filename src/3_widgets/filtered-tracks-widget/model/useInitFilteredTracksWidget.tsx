import { useCallback } from 'react';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import type { Track } from '@entities/track/types.ts';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import { useSearchParams } from 'react-router-dom';
import type { TracksByGenreArgs } from '@entities/album/types.ts';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitFilteredTracksWidget = (
  tracksLimitPerPage: number,
  genre: TracksByGenreArgs['genre'],
  offset: number,
) => {
  const [searchParams] = useSearchParams();

  const sortParam = searchParams.get('sort') || 'popular';
  const moodParam = searchParams.get('mood') || 'other';

  const isPlaying = useAppSelector(getIsPlaying);
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const isBuffering = useAppSelector(getIsBuffering);

  const renderAction = useCallback(
    (track: Track) => {
      return (
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
            type: 'album',
            params: {
              genre,
              limit: tracksLimitPerPage,
              offset,
              sortParam,
              moodParam,
            },
          }}
        />
      );
    },
    [genre, moodParam, offset, sortParam, tracksLimitPerPage],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  return {
    isPlaying,
    currentTrackId,
    isBuffering,
    sortParam,
    moodParam,
    renderAction,
    renderDurationChange,
  };
};
