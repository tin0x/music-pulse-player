import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialState, ShowToastPayload } from '@shared/lib/slices/toast/types';

const initialState: InitialState = {
  eventType: 'success',
  isActive: false,
};

const toastSlice = createSlice({
  name: 'toastSlice',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ShowToastPayload>) => {
      const { eventType, messageType, customMessage } = action.payload;
      state.eventType = eventType;
      state.isActive = true;

      if (messageType) {
        state.messageType = messageType;
      }

      if (customMessage) {
        state.customMessage = customMessage;
      }
    },
    hiddenToast: (state) => {
      state.isActive = false;
    },
  },
});

export const { showToast, hiddenToast } = toastSlice.actions;
export default toastSlice.reducer;
