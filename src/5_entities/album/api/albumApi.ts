import { baseApi } from '@shared/api/baseApi.ts';
import type { TracksByGenre, TracksByGenreArgs } from '@entities/album/types.ts';
import { TracksByGenreDTOSchema } from '@entities/album/schemas/TracksByGenreDTOSchema.ts';
import { mapTrackToAlbum } from '@entities/album/mappers/mapTrackToAlbum.ts';

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
      transformResponse: (response: unknown): TracksByGenre => {
        const dto = TracksByGenreDTOSchema.parse(response);
        return dto.data.map(mapTrackToAlbum);
      },
    }),
  }),
});

export const { useGetTracksByGenreQuery } = albumApi;
