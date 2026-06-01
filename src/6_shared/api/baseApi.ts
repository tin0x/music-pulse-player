import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MUSIC_API } from '@shared/constants/api.ts';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: MUSIC_API.BASE }),
  endpoints: () => ({}),
});
