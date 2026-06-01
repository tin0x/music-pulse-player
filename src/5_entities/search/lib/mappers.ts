import type {
  ArtistFromSearchResult,
  ArtistFromSearchResultDTO,
  TrackFromSearchResult,
  TrackFromSearchResultDTO,
} from '@entities/search/types.ts';

export const mapTracksFromSearchResult = (dto: TrackFromSearchResultDTO): TrackFromSearchResult => {
  return {
    trackId: dto.track_id,
    name: dto.title,
    type: 'track',
  };
};

export const mapArtistsFromSearchResult = (dto: ArtistFromSearchResultDTO): ArtistFromSearchResult => {
  return {
    id: dto.id,
    name: dto.name,
    type: 'artist',
  };
};
