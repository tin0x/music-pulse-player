import type { RootState } from '@app/store/store.ts';
import { trackApi } from '@entities/track/api/trackApi.ts';
import type { FavoriteContext, RecentlyContext, TrendingContext } from '@entities/player/types.ts';

export const selectTrendingTracks = (state: RootState, context: TrendingContext['params']) =>
  trackApi.endpoints.getTrendingTracks.select(context)(state).data;

export const selectTracksByIds = (state: RootState, context: RecentlyContext['params'] | FavoriteContext['params']) =>
  trackApi.endpoints.getTracksByIds.select(context)(state).data;
