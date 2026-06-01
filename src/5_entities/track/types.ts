// DATA TYPES

import React from 'react';
import type { InitialState } from '@entities/user/types.ts';

export type TrackDTO = {
  id: string;
  title: string;
  duration: number;
  genre: string;
  favorite_count: number;
  release_date?: string;
  user_id?: string;
  artwork?: {
    '480x480'?: string;
  };
  user: {
    id: string;
    name: string;
    profile_picture: {
      '480x480'?: string;
    };
    follower_count: number;
    favorite_count: number;
  };
  stream: {
    url: string;
  };
};

export type Track = {
  id: string;
  title: string;
  duration: number;
  cover: string;
  genre: string;
  favorite: number;
  release?: string;
  userId?: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    followerCount?: number;
    favoriteCount?: number;
  };
  streamUrl: string;
};

export type TrackArg = {
  limit: number;
};

export type TracksByIdsArgs = {
  ids: string[];
};

// UI TYPES

export type TrackItemProps = {
  id?: string;
  index?: string | number;
  avatar: string | null;
  title: string;
  duration?: React.ReactNode;
  isActive: boolean;
  beforeDuration?: React.ReactNode;
  actionSlot: React.ReactNode;
  trackIdParam?: string;
  pathTo?: string;
  isTrackActive?: boolean;
};

export type TrackListProps = {
  className?: string;
  subtitle?: string;
  tracks: Track[];
  renderAction: (track: Track) => React.ReactNode;
  renderDuration: (track: Track) => React.ReactNode;
  isLinkShowMore?: boolean;
  pathTo?: string;
  isPlaying: boolean;
  isBuffering: boolean;
  currentTrackId: string;
  currentPage?: number;
  tracksLimitPerPage?: number;
  limitTracks?: number;
  lang: InitialState['language'];
};

export type RecentlyPlayedListProps = {
  playedTracks: Track[];
  actionSlot: (track: Track) => React.ReactNode;
  trackIdParam: string;
  isPlaying: boolean;
  lang: InitialState['language'];
};

export type TrackDescriptionProps = {
  track: {
    id: string;
    cover: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    title: string;
    userId?: string | null;
    duration: number;
    genre: string;
    favorite: number;
    release?: string | null;
  };
  lang: InitialState['language'];
  renderActionToggleFavorite: (id?: string) => React.ReactNode;
};
