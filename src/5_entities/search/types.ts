// SEARCH TRACKS

import React from 'react';
import type { InitialState } from '@entities/user/types.ts';

export type TrackFromSearchResultDTO = {
  track_id: number;
  title: string;
};

export type TracksFromSearchResultDTO = {
  data: {
    tracks: TrackFromSearchResultDTO[];
  };
};

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

export type ArtistFromSearchResultDTO = {
  id: string;
  name: string;
};

export type ArtistsFromSearchResultDTO = {
  data: {
    users: ArtistFromSearchResultDTO[];
  };
};

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
