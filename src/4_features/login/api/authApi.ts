import mapLoginError from '@features/login/mappers/mapLoginError';
import type { LoginArgs } from '@features/login/types';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginArgs>({
      async queryFn({ email, password }) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
          return {
            error: mapLoginError(error),
          };
        }

        return {
          data: undefined,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
