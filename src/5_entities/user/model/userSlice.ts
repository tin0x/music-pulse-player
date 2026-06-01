import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialState, MessagePayload, UserPayload } from '@entities/user/types.ts';

const initialState: InitialState = {
  user: null,
  messages: [],
  language: 'en',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = { subscriptionType: 'free', statusUser: 'listener', ...action.payload };
    },
    clearUser: (state) => {
      state.user = null;
      state.messages = [];
    },
    addMessage: (state, action: PayloadAction<MessagePayload>) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<{ itemId: string }>) => {
      state.messages = state.messages.filter((message) => message.id !== action.payload.itemId);
    },
    toggleLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser, addMessage, deleteMessage, toggleLanguage } = userSlice.actions;
