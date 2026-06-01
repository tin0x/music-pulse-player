import type {
  AlbumContext,
  ArtistContext,
  FavoriteContext,
  InitialState,
  RecentlyContext,
  TargetContext,
  TrendingContext,
} from '@entities/player/types.ts';

export type TogglePlaybackProps = {
  className?: string;
  track: InitialState['track'];
  playerContext: TrendingContext | RecentlyContext | AlbumContext | ArtistContext | FavoriteContext | TargetContext;
};
