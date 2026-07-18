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

export type TrackByGenre = {
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

export type TracksByGenre = TrackByGenre[];

// UI

export type GenreSliderProps = {
  className?: string;
  lang: InitialState['language'];
};
