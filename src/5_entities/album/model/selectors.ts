import type { RootState } from '@app/store/store.ts';
import { albumApi } from '@entities/album/api/albumApi.ts';
import type { AlbumContext } from '@entities/player/types.ts';

export const selectTracksByGenre = (state: RootState, context: AlbumContext['params']) =>
  albumApi.endpoints.getTracksByGenre.select(context)(state).data;
