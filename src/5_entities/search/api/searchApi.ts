import { baseApi } from '@shared/api/baseApi.ts';
import type {
  ArtistsFromSearchResult,
  ArtistsFromSearchResultArgs,
  ArtistsFromSearchResultDTO,
  TracksFromSearchResult,
  TracksFromSearchResultArgs,
  TracksFromSearchResultDTO,
} from '@entities//search/types.ts';
import { mapArtistsFromSearchResult, mapTracksFromSearchResult } from '@entities/search/lib/mappers.ts';

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
      transformResponse: (response: TracksFromSearchResultDTO): TracksFromSearchResult => {
        return response.data.tracks.map(mapTracksFromSearchResult);
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
      transformResponse: (response: ArtistsFromSearchResultDTO): ArtistsFromSearchResult => {
        return response.data.users.map(mapArtistsFromSearchResult);
      },
    }),
  }),
});

export const { useGetArtistsFromSearchResultQuery, useGetTracksFromSearchResultQuery } = searchApi;
