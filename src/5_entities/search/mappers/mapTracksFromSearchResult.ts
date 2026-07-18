import type { TrackFromSearchResult } from '@entities/search/types.ts';
import type { TrackFromSearchResultDTO } from '@entities/search/schemas/TracksFromSearchResultDTOSchema.ts';

export const mapTracksFromSearchResult = (dto: TrackFromSearchResultDTO): TrackFromSearchResult => {
  return {
    trackId: dto.track_id,
    name: dto.title,
    type: 'track',
  };
};
