import React from 'react';
import type { InitialState } from '@entities/user/types.ts';

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
  userId: number;
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
