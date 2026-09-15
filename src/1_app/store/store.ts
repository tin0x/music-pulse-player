import { initAudioEvents } from '@entities/player/lib/initAudioEvents.ts';
import { playerListener } from '@entities/player/model/listeners/playerListener.ts';
import playerReducer from '@entities/player/model/playerSlice.ts';
import userReducer from '@entities/user/model/userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api/baseApi.ts';
import supabaseApi from '@shared/api/supabase/supabaseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [supabaseApi.reducerPath]: supabaseApi.reducer,
  user: userReducer,
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(playerListener.middleware).concat(baseApi.middleware).concat(supabaseApi.middleware),
});

initAudioEvents(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
