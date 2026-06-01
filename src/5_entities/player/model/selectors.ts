import type { RootState } from '@app/store/store.ts';
import type { InitialState } from '@entities/player/types.ts';

export const getCurrentTrack = (state: RootState): InitialState['track'] => state.player.track;
export const getModePlayer = (state: RootState): InitialState['mode'] => state.player.mode;
export const getIsPlaying = (state: RootState): InitialState['isPlaying'] => state.player.isPlaying;
export const getIsBuffering = (state: RootState): InitialState['isBuffering'] => state.player.isBuffering;
export const getIsMuted = (state: RootState): InitialState['isMuted'] => state.player.isMuted;
export const getVolume = (state: RootState): InitialState['volume'] => state.player.volume;
export const getCurrentTrackId = (state: RootState): InitialState['currentTrackId'] => state.player.currentTrackId;
export const getCurrentTime = (state: RootState): InitialState['currentTime'] => state.player.currentTime;
export const getDuration = (state: RootState): InitialState['duration'] => state.player.duration;
export const getRecentlyPlayedTracks = (state: RootState): InitialState['recentlyPlayedTracks'] =>
  state.player.recentlyPlayedTracks;
export const getFavoriteList = (state: RootState): InitialState['favoriteList'] => state.player.favoriteList;
export const getContext = (state: RootState): InitialState['context'] => state.player.context;
