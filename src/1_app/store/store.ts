import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api/baseApi.ts';
import userReducer from '@entities/user/model/userSlice';
import authReducer from '@features/auth/model/authSlice';
import playerReducer from '@entities/player/model/playerSlice.ts';
import { playerListener } from '@entities/player/model/listeners/playerListener.ts';
import { initAudioEvents } from '@entities/player/lib/initAudioEvents.ts';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
  auth: authReducer,
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(playerListener.middleware).concat(baseApi.middleware),
});

initAudioEvents(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
