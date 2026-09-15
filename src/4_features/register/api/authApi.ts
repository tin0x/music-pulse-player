import mapRegisterError from '@features/register/mappers/mapRegisterError';
import type { RegisterArgs } from '@features/register/types';
import supabase from '@shared/api/supabase/client';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterArgs>({
      async queryFn({ email, password, username, avatar }) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              avatar,
            },
          },
        });

        if (error) {
          return {
            error: mapRegisterError(error),
          };
        }

        return {
          data: undefined,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
