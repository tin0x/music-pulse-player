import mapFavoriteError from '@features/toggle-favorite/mappers/mapFavoriteError';
import type { AddFavoriteArgs, RemoveFavoriteArgs } from '@features/toggle-favorite/types';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const favoriteApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFavorite: builder.mutation<void, AddFavoriteArgs>({
      async queryFn({ entityType, entityId, userId }) {
        const { error } = await supabase
          .from('favorites')
          .upsert({ user_id: userId, entity_type: entityType, entity_id: entityId }, { ignoreDuplicates: true });

        if (error) {
          return { error: mapFavoriteError(error) };
        }

        return { data: undefined };
      },
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
    removeFavorite: builder.mutation<void, RemoveFavoriteArgs>({
      async queryFn({ entityType, entityId, userId }) {
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('entity_type', entityType)
          .eq('entity_id', entityId)
          .eq('user_id', userId);

        if (error) {
          return {
            error: mapFavoriteError(error),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
  }),
});

export const { useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;
