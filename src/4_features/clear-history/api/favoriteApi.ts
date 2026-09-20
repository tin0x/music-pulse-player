import type { ClearHistoryArgs } from '@features/clear-history/types';
import { mapFavoriteError } from '@features/toggle-favorite';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const favoriteApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    clearHistory: builder.mutation<void, ClearHistoryArgs>({
      async queryFn({ userId, entityType }) {
        const { error } = await supabase.from('favorites').delete().eq('entity_type', entityType).eq('user_id', userId);

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

export const { useClearHistoryMutation } = favoriteApi;
