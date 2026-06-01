import type { RootState } from '@app/store/store.ts';
import { albumApi } from '@entities/album/api/albumApi.ts';
import type { AlbumContext } from '@entities/player/types.ts';
import { trackApi } from '@entities/track/api/trackApi.ts';

export const selectTracksByGenre = (state: RootState, context: AlbumContext['params']) =>
  albumApi.endpoints.getTracksByGenre.select(context)(state).data;

export const selectTrackById = (state: RootState, context: { id: string }) =>
  trackApi.endpoints.getTrackById.select(context)(state).data;
