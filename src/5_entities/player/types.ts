import type { TracksByGenreArgs } from '@entities/album/types.ts';
import React from 'react';

export type TrendingContext = {
  type: 'trending';
  params: {
    limit: number;
  };
};

export type RecentlyContext = {
  type: 'recently';
  params: {
    ids: string[];
    limit?: number;
  };
};

export type AlbumContext = {
  type: 'album';
  params: {
    genre: TracksByGenreArgs['genre'];
    limit: number;
    offset: number;
    sortParam: string;
    moodParam: string;
  };
};

export type ArtistContext = {
  type: 'artist';
  params: {
    id: string;
    limit: number;
    offset: number;
  };
};

export type TargetContext = {
  type: 'target';
  params: {
    id: string;
    limit: number;
  };
};

export type FavoriteContext = {
  type: 'favorite';
  params: {
    ids: string[];
    limit?: number;
  };
};

export type InitialState = {
  track: {
    id: string;
    source: string;
    poster: string;
    name: string;
    artist: {
      id: string;
      name: string;
    };
  } | null;
  mode: 'repeat' | 'shuffle' | null;
  isPlaying: boolean;
  isBuffering: boolean;
  isMuted: boolean;
  isEnded: boolean;
  volume: number;
  currentTrackId: string | null;
  currentTime: number;
  duration: number;
  recentlyPlayedTracks: string[];
  favoriteList: {
    tracks: string[];
    artists: string[];
  };
  context: TrendingContext | RecentlyContext | AlbumContext | ArtistContext | FavoriteContext | TargetContext | null;
};

export type ChangeDurationRangeAction = {
  type: 'relative' | 'absolute';
  range: number;
};

export type ChangeLoudnessRangeAction = {
  range: number;
};

export type PlayNextAction = {
  isControlButton: boolean;
};

// UI

export type ButtonTogglePlaybackProps = {
  className?: string;
  isPlaying: boolean;
  isBuffering: boolean;
  onClick: () => void;
};

export type ButtonNextTrackProps = {
  onClick: () => void;
};

export type ButtonPreviousTrackProps = {
  onClick: () => void;
};

export type ButtonSeekForwardProps = {
  onClick: () => void;
  isDisabled: boolean;
};

export type ButtonSeekBackwardProps = {
  onClick: () => void;
  isDisabled: boolean;
};

export type InputRangeDurationProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  duration: {
    totalDuration: number;
    currentTime: number;
    timeLeft: number;
  };
};

export type InputRangeLoudnessProps = {
  volume: number;
  isMuted?: boolean;
  actionSlot: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonLoudnessProps = {
  volume: number;
  isMuted: boolean;
  onClick: () => void;
  className?: string;
};

export type ButtonLoopListProps = {
  onClick: () => void;
  isActive: boolean;
};

export type ButtonRandomSelection = {
  onClick: () => void;
  isActive: boolean;
};

export type ButtonFavoriteTrackProps = {
  onClick: () => void;
  isFavorite: boolean;
};

export type TrackInfoProps = {
  poster: string | null;
  name: string;
  artist: {
    id: string;
    name: string;
  };
  isThisPlayingTrack: boolean;
  isPlaying: boolean;
  isBuffering: boolean;
};

export type ButtonRepeatTrackProps = {
  modePlayer: InitialState['mode'];
  onClick: () => void;
};

export type ButtonShuffleListProps = {
  modePlayer: InitialState['mode'];
  onClick: () => void;
};
