// SEARCH TRACKS

import React from 'react';
import type { InitialState } from '@entities/user/types.ts';

export type TrackFromSearchResult = {
  trackId: number;
  name: string;
  type: 'track';
};

export type TracksFromSearchResult = TrackFromSearchResult[];

export type TracksFromSearchResultArgs = {
  query: string;
  limit: number;
};

// SEARCH ARTISTS

export type ArtistsFromSearchResultArgs = {
  query: string;
  limit: number;
};

export type ArtistFromSearchResult = {
  id: string;
  name: string;
  type: 'artist';
};

export type ArtistsFromSearchResult = ArtistFromSearchResult[];

// UI

export type InputSearchProps = {
  response: (TrackFromSearchResult | ArtistFromSearchResult)[];
  actionSlot: React.ReactNode;
  isLoading: boolean;
  lang: InitialState['language'];
};
