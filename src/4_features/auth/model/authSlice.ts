import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialState, PayloadToken } from '@features/auth/types.ts';
import { load } from '@shared/lib/utils/storage/load.ts';

const initialState: InitialState = {
  token: load('token'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<PayloadToken>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setToken, clearToken } = authSlice.actions;
