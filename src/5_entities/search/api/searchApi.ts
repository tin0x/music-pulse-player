import { baseApi } from '@shared/api/baseApi.ts';
import type {
  ArtistsFromSearchResult,
  ArtistsFromSearchResultArgs,
  TracksFromSearchResult,
  TracksFromSearchResultArgs,
} from '@entities//search/types.ts';
import { mapTracksFromSearchResult } from '@entities/search/mappers/mapTracksFromSearchResult.ts';
import { mapArtistsFromSearchResult } from '@entities/search/mappers/mapArtistsFromSearchResult.ts';
import { TracksFromSearchResultDTOSchema } from '@entities/search/schemas/TracksFromSearchResultDTOSchema.ts';
import { ArtistsFromSearchResultDTO } from '@entities/search/schemas/ArtistsFromSearchResultDTOSchema.ts';

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTracksFromSearchResult: builder.query<TracksFromSearchResult, TracksFromSearchResultArgs>({
      query: ({ query, limit }) => ({
        url: '/search/autocomplete',
        params: {
          query,
          kind: 'tracks',
          limit,
          sort_method: 'popular',
        },
      }),
      transformResponse: (response: unknown): TracksFromSearchResult => {
        const dto = TracksFromSearchResultDTOSchema.parse(response);
        return dto.data.tracks.map(mapTracksFromSearchResult);
      },
    }),
    getArtistsFromSearchResult: builder.query<ArtistsFromSearchResult, ArtistsFromSearchResultArgs>({
      query: ({ query, limit }) => ({
        url: '/search/autocomplete',
        params: {
          query,
          kind: 'users',
          limit,
          sort_method: 'popular',
        },
      }),
      transformResponse: (response: unknown): ArtistsFromSearchResult => {
        const dto = ArtistsFromSearchResultDTO.parse(response);
        return dto.data.users.map(mapArtistsFromSearchResult);
      },
    }),
  }),
});

export const { useGetArtistsFromSearchResultQuery, useGetTracksFromSearchResultQuery } = searchApi;
