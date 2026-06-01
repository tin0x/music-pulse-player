import { baseApi } from '@shared/api/baseApi.ts';
import { mapArtist, mapArtistTrack } from '@entities/artist/model/utils/mappers.ts';
import type {
  ArtistProfile,
  ArtistProfileDTO,
  ArtistTrack,
  ArtistTrackDTO,
  TracksByArtistIdArgs,
} from '@entities/artist/types.ts';
import type { Track } from '@entities/album/types.ts';

export const artistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArtists: builder.query<ArtistTrack[], { limit: number }>({
      query: ({ limit }) => ({
        url: `/tracks/trending`,
        params: {
          limit: limit,
        },
      }),
      transformResponse: (response: { data: ArtistTrackDTO[] }): ArtistTrack[] => {
        return response.data.map(mapArtistTrack);
      },
    }),
    getArtistById: builder.query<ArtistProfile, { id: string }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      transformResponse: (response: { data: ArtistProfileDTO }): ArtistProfile => {
        return mapArtist(response.data);
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
      transformResponse: (response: { data: ArtistProfileDTO[] }): ArtistProfile[] => {
        return response.data.map(mapArtist);
      },
    }),
    getTracksByArtistId: builder.query<Track[], TracksByArtistIdArgs>({
      query: ({ id, limit, offset }) => ({
        url: `/users/${id}/tracks`,
        params: {
          limit,
          offset,
        },
      }),
      keepUnusedDataFor: 86400,
      transformResponse: (response: { data: ArtistTrackDTO[] }): ArtistTrack[] => {
        return response.data.map(mapArtistTrack);
      },
    }),
  }),
});

export const { useGetArtistsQuery, useGetArtistByIdQuery, useGetArtistsByIdsQuery, useGetTracksByArtistIdQuery } =
  artistApi;
