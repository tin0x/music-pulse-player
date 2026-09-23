import type { InitialState, SetModePayload, SetTrackPayload } from '@entities/player/types.ts';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  track: null,
  mode: null,
  isPlaying: false,
  isBuffering: true,
  isMuted: false,
  isEnded: true,
  volume: 0.5,
  currentTrackId: null,
  currentTime: 0,
  duration: 0,
  recentlyPlayedTracks: [],
  context: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<SetTrackPayload>) => {
      const { track, playerContext } = action.payload;
      state.track = track;
      state.currentTrackId = track?.id ?? state.currentTrackId;
      state.isPlaying = true;
      state.isBuffering = true;
      state.context = playerContext;
      state.isEnded = false;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleIsEnded: (state, action: PayloadAction<boolean>) => {
      state.isEnded = action.payload;
    },
    setMode: (state, action: PayloadAction<SetModePayload>) => {
      state.mode = action.payload;
    },
    setIsBuffering: (state, action: PayloadAction<boolean>) => {
      state.isBuffering = action.payload;
    },
    setMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    updateVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setRecentlyPlayedTracks: (state, action: PayloadAction<string[]>) => {
      state.recentlyPlayedTracks = action.payload;
    },
    clearPlayer: (state) => {
      const currentRecentlyPlayedTracks = state.recentlyPlayedTracks;

      return {
        ...initialState,
        recentlyPlayedTracks: currentRecentlyPlayedTracks,
      };
    },
  },
});

export default playerSlice.reducer;
export const {
  setTrack,
  togglePlay,
  toggleIsEnded,
  setMode,
  setIsBuffering,
  setMute,
  updateProgress,
  updateVolume,
  setDuration,
  setRecentlyPlayedTracks,
  clearPlayer,
} = playerSlice.actions;
