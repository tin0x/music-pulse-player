import type { Favorites } from '@entities/favorite/types';
import mapFavoriteError from '@features/toggle-favorite/mappers/mapFavoriteError';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const favoriteApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchFavorites: builder.query<Favorites, void>({
      async queryFn() {
        const { data, error } = await supabase.from('favorites').select('entity_type, entity_id').order('created_at');

        if (error) {
          return {
            error: mapFavoriteError(error),
          };
        }

        return {
          data: {
            tracks: data.filter((row) => row.entity_type === 'track').map((row) => row.entity_id),
            artists: data.filter((row) => row.entity_type === 'artist').map((row) => row.entity_id),
          },
        };
      },
      providesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
  }),
});

export const { useFetchFavoritesQuery } = favoriteApi;
