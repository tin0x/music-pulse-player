import React from 'react';
import type { InitialState } from '@entities/user/types.ts';

export type ArtistProfileDTO = {
  id: string;
  name: string;
  location: string;
  bio: string;
  album_count: number;
  follower_count: number;
  profile_picture: {
    '480x480': string;
  };
  user_id: string;
  track_count: number;
  instagram_handle: string;
  twitter_handle: string;
  tiktok_handle: string;
  website: string;
};

export type ArtistTrackDTO = {
  id: string;
  title: string;
  duration: number;
  genre: string;
  favorite_count: number;
  artwork?: {
    '480x480'?: string;
  };
  user: {
    id: string;
    name: string;
    profile_picture: {
      '480x480'?: string | null;
    };
    follower_count: number;
    favorite_count: number;
  };
  stream: {
    url: string;
  };
};

export type ArtistTrack = {
  id: string;
  title: string;
  duration: number;
  cover: string;
  genre: string;
  favorite: number;
  user: {
    id: string;
    name: string;
    avatar: string;
    followerCount: number;
    favoriteCount: number;
  };
  streamUrl: string;
};

export type ArtistProfile = {
  id: string;
  name: string;
  location: string;
  bio: string;
  albumCount: number;
  followerCount: number;
  avatar: string;
  userId: string;
  trackCount: number;
  socialLinks: {
    instagram: string;
    twitter: string;
    tiktok: string;
    website: string;
  };
};

export type TopArtist = {
  id: string;
  name: string;
  avatar: string | null;
  followerCount: number;
  trackCount: number;
};

export type ArtistItemProps = {
  artist: TopArtist;
  isLast?: boolean;
  artistIdParam: string;
  lang: InitialState['language'];
  renderActionToggleFavorite: (userId: string) => React.ReactNode;
};

export type TracksByArtistIdArgs = {
  id: string;
  limit: number;
  offset: number;
};

// UI

export type ArtistDescriptionProps = {
  artist: ArtistProfile;
  renderActionToggleFavorite: () => React.ReactNode;
  lang: InitialState['language'];
};

export type ButtonToggleFavoriteArtistProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export type ArtistPreviewProps = {
  className?: string;
  classNameAvatar?: string;
  name: string;
  avatar: string;
  pathTo?: string;
};

export type ArtistSliderProps = {
  className?: string;
  artists: ArtistProfile[];
  limitSlides?: number;
  lang: InitialState['language'];
};

export type ArtistsListProps = {
  artists: ArtistProfile[];
  lang: InitialState['language'];
};
