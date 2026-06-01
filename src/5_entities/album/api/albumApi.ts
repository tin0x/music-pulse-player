import { baseApi } from '@shared/api/baseApi.ts';
import type { TrackDTO, TracksByGenre, TracksByGenreArgs } from '@entities/album/types.ts';
import { mapTrackToAlbum } from '@entities/album/lib/mappers.ts';

export const albumApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTracksByGenre: builder.query<TracksByGenre, TracksByGenreArgs>({
      query: ({ genre, limit, offset, sortParam, moodParam }) => ({
        url: '/tracks/search',
        params: {
          genre: genre,
          limit,
          offset: offset,
          sort_method: sortParam,
          mood: moodParam,
        },
      }),
      keepUnusedDataFor: 86400,
      transformResponse: (response: { data: TrackDTO[] }): TracksByGenre => {
        return response.data.map(mapTrackToAlbum);
      },
    }),
  }),
});

export const { useGetTracksByGenreQuery } = albumApi;
