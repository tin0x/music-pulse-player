import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialState, PayloadToken } from '@features/auth/types.ts';

const initialState: InitialState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<PayloadToken>) => {
      state.token = action.payload;
    },
    clearToken: () => initialState,
  },
});

export default authSlice.reducer;
export const { setToken, clearToken } = authSlice.actions;
