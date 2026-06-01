import type { InitialState } from '@entities/user/types.ts';

export type TracksByGenreArgs = {
  genre:
    | 'House'
    | 'Electronic'
    | 'Dubstep'
    | 'Hip-Hop'
    | 'Trap'
    | 'Tech House'
    | 'Pop'
    | 'Drum & Bass'
    | 'Electro'
    | 'Techno';
  limit: number;
  offset: number;
  sortParam: string;
  moodParam: string;
};

export type TrackDTO = {
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
    profile_picture?: {
      '480x480'?: string;
    };
  };
  stream?: {
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
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  streamUrl: string;
};

export type TracksByGenre = Track[];

// UI

export type GenreSliderProps = {
  className?: string;
  lang: InitialState['language'];
};
