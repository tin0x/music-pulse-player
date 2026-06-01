import { baseApi } from '@shared/api/baseApi.ts';
import type { Track, TrackArg, TrackDTO, TracksByIdsArgs } from '@entities/track/types.ts';
import { mapTrack } from '@entities/track/lib/mappers.ts';

export const trackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingTracks: builder.query<Track[], TrackArg>({
      query: ({ limit }) => ({
        url: '/tracks/trending',
        params: {
          limit,
        },
      }),
      keepUnusedDataFor: 86400,
      transformResponse: (response: { data: TrackDTO[] }): Track[] => {
        const mappedTracks = response.data.map(mapTrack);
        return [...mappedTracks].sort((a, b) => b.favorite - a.favorite);
      },
    }),
    getTracksByIds: builder.query<Track[], TracksByIdsArgs>({
      query: ({ ids }) => {
        const params = new URLSearchParams();
        ids.forEach((id) => params.append('id', id));

        return {
          url: `/tracks?${params.toString()}`,
        };
      },
      transformResponse: (response: { data: TrackDTO[] }): Track[] => {
        const mappedTracks = response.data.map(mapTrack);
        return [...mappedTracks];
      },
    }),
    getTrackById: builder.query<Track[], { id: string }>({
      query: ({ id }) => ({
        url: `/tracks`,
        params: {
          id,
        },
      }),
      keepUnusedDataFor: 86400,
      transformResponse: (response: { data: TrackDTO[] }): Track[] => {
        const [track] = response.data.map(mapTrack);
        return [track];
        // fixed duplicate API issue
      },
    }),
  }),
});

export const { useGetTrendingTracksQuery, useGetTracksByIdsQuery, useGetTrackByIdQuery } = trackApi;
