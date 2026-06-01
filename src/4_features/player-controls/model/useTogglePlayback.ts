import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { setTrack, togglePlay } from '@entities/player/model/playerSlice.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useCallback } from 'react';
import type {
  AlbumContext,
  ArtistContext,
  FavoriteContext,
  InitialState,
  RecentlyContext,
  TargetContext,
  TrendingContext,
} from '@entities/player/types.ts';

export const useTogglePlayback = (
  track: InitialState['track'],
  playerContext: TrendingContext | RecentlyContext | AlbumContext | ArtistContext | FavoriteContext | TargetContext,
) => {
  const dispatch = useAppDispatch();
  const currentTrackId = useAppSelector(getCurrentTrackId);
  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);

  const id = track?.id;

  const handleTogglePlayback = useCallback(() => {
    if (currentTrackId === id) {
      dispatch(togglePlay());
    } else {
      dispatch(setTrack({ track, playerContext }));
    }
  }, [dispatch, id, track, currentTrackId, playerContext]);

  return { handleTogglePlayback, currentTrackId, isPlaying, isBuffering };
};
