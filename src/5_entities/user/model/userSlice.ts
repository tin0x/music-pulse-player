import type { AddMessagePayload, DeleteMessagePayload, InitialState } from '@entities/user/types.ts';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  messages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<AddMessagePayload>) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<DeleteMessagePayload>) => {
      state.messages = state.messages.filter((message) => message.id !== action.payload.itemId);
    },
  },
});

export default userSlice.reducer;
export const { addMessage, deleteMessage } = userSlice.actions;
