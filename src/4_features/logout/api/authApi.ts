import mapLogoutError from '@features/logout/mappers/mapLogoutError';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      async queryFn() {
        const { error } = await supabase.auth.signOut();

        if (!error || error.code === 'session_not_found') {
          return { data: undefined };
        }

        return {
          error: mapLogoutError(error),
        };
      },
    }),
  }),
});

export const { useLogoutMutation } = authApi;
