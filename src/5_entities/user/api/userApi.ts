import mapUserError from '@entities/user/mappers/mapUserError';
import type { getUserInfo, getUserInfoArgs } from '@entities/user/types';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const userApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<getUserInfo, getUserInfoArgs>({
      async queryFn({ userId }) {
        const { data, error } = await supabase.from('profiles').select().eq('id', userId).single();

        if (error) {
          return {
            error: mapUserError(error),
          };
        }

        return {
          data,
        };
      },
      providesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
