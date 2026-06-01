import type { RootState } from '@app/store/store.ts';
import type { ArtistContext } from '@entities/player/types.ts';
import { artistApi } from '@entities/artist/api/artistApi.ts';

export const selectTracksByArtistId = (state: RootState, context: ArtistContext['params']) =>
  artistApi.endpoints.getTracksByArtistId.select(context)(state).data;
