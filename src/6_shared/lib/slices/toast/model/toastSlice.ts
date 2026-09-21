import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AddToastPayload, InitialState } from '@shared/lib/slices/toast/types';

const initialState: InitialState = {
  eventType: 'success',
  messageType: 'internet',
  isActive: false,
};

const toastSlice = createSlice({
  name: 'toastSlice',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<AddToastPayload>) => {
      const { eventType, messageType } = action.payload;
      state.eventType = eventType;
      state.messageType = messageType;
      state.isActive = true;
    },
    hiddenToast: (state) => {
      state.isActive = false;
    },
  },
});

export const { addToast, hiddenToast } = toastSlice.actions;
export default toastSlice.reducer;
