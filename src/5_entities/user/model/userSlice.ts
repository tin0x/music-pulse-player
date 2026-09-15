import type { InitialState, MessagePayload } from '@entities/user/types.ts';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  user: null,
  messages: [],
  language: 'en',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<MessagePayload>) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<{ itemId: string }>) => {
      state.messages = state.messages.filter((message) => message.id !== action.payload.itemId);
    },
  },
});

export default userSlice.reducer;
export const { addMessage, deleteMessage } = userSlice.actions;
