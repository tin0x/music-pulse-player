import type { ArtistFromSearchResult } from '@entities/search/types.ts';
import type { ArtistFromSearchResultDTO } from '@entities/search/schemas/ArtistsFromSearchResultDTOSchema.ts';

export const mapArtistsFromSearchResult = (dto: ArtistFromSearchResultDTO): ArtistFromSearchResult => {
  return {
    id: dto.id,
    name: dto.name,
    type: 'artist',
  };
};
