import mapUpdateUserInfoError from '@features/update-user-info/mappers/mapUpdateUserInfoError';
import type { UpdateUserInfoArgs } from '@features/update-user-info/types';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const userApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation<void, UpdateUserInfoArgs>({
      async queryFn({ userId, avatar }) {
        const { error, count } = await supabase.from('profiles').update({ avatar }).eq('id', userId);

        if (error) {
          return {
            error: mapUpdateUserInfoError(error),
          };
        }

        if (count === 0) {
          return {
            error: { status: 403, data: { code: 'UPDATE_BLOCKED', message: 'Not allowed to update this profile' } },
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { useUpdateUserInfoMutation } = userApi;
