import type { InitialState } from '@entities/player/types.ts';
import { createSlice } from '@reduxjs/toolkit';

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
  favoriteList: {
    tracks: [],
    artists: [],
  },
  context: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      const { track, playerContext } = action.payload;
      state.track = track;
      state.currentTrackId = track.id;
      state.isPlaying = true;
      state.isBuffering = true;
      state.context = playerContext;
      state.isEnded = false;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleIsEnded: (state, action) => {
      state.isEnded = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setIsBuffering: (state, action) => {
      state.isBuffering = action.payload;
    },
    setMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    updateProgress: (state, action) => {
      state.currentTime = action.payload;
    },
    updateVolume: (state, action) => {
      state.volume = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setRecentlyPlayedTracks: (state, action) => {
      state.recentlyPlayedTracks = action.payload;
    },
    updateFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
    clearPlayer: () => initialState,
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
  updateFavoriteList,
  clearPlayer,
} = playerSlice.actions;
