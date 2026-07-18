import { baseApi } from '@shared/api/baseApi.ts';
import type { ArtistProfile, ArtistTrack, TracksByArtistIdArgs } from '@entities/artist/types.ts';
import { mapArtistTrack } from '@entities/artist/mappers/mapArtistTrack.ts';
import { mapArtist } from '@entities/artist/mappers/mapArtist.ts';
import { ArtistTracksDTOSchema } from '@entities/artist/schemas/ArtistTracksDTOSchema.ts';
import {
  ArtistProfileDTOResponseSchema,
  ArtistsProfilesDTOResponseSchema,
} from '@entities/artist/schemas/ArtistProfileDTOSchema.ts';

export const artistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArtists: builder.query<ArtistTrack[], { limit: number }>({
      query: ({ limit }) => ({
        url: `/tracks/trending`,
        params: {
          limit: limit,
        },
      }),
      transformResponse: (response: unknown): ArtistTrack[] => {
        const dto = ArtistTracksDTOSchema.parse(response);
        return dto.data.map(mapArtistTrack);
      },
    }),
    getArtistById: builder.query<ArtistProfile, { id: string }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      transformResponse: (response: unknown): ArtistProfile => {
        const dto = ArtistProfileDTOResponseSchema.parse(response);
        return mapArtist(dto.data);
      },
    }),
    getArtistsByIds: builder.query<ArtistProfile[], { ids: string[] }>({
      query: ({ ids }) => {
        const params = new URLSearchParams();
        ids.forEach((id) => params.append('id', id));

        return {
          url: `/users?${params.toString()}`,
        };
      },
      transformResponse: (response: unknown): ArtistProfile[] => {
        const dto = ArtistsProfilesDTOResponseSchema.parse(response);
        return dto.data.map(mapArtist);
      },
    }),
    getTracksByArtistId: builder.query<ArtistTrack[], TracksByArtistIdArgs>({
      query: ({ id, limit, offset }) => ({
        url: `/users/${id}/tracks`,
        params: {
          limit,
          offset,
        },
      }),
      keepUnusedDataFor: 86400,
      transformResponse: (response: unknown): ArtistTrack[] => {
        const dto = ArtistTracksDTOSchema.parse(response);
        return dto.data.map(mapArtistTrack);
      },
    }),
  }),
});

export const { useGetArtistsQuery, useGetArtistByIdQuery, useGetArtistsByIdsQuery, useGetTracksByArtistIdQuery } =
  artistApi;
