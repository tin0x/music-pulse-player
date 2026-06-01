import type { TracksByGenreArgs } from '@entities/album/types.ts';

export type TopGenreWidgetProps = {
  genre: TracksByGenreArgs['genre'];
  tracksLimitPerPage: TracksByGenreArgs['limit'];
  currentPage: number;
  totalTracks: number;
};

export type FetchTracksByGenreArgs = {
  genre: TracksByGenreArgs['genre'];
  tracksLimitPerPage: TracksByGenreArgs['limit'];
  offset: TracksByGenreArgs['offset'];
  sortParam: TracksByGenreArgs['sortParam'];
  moodParam: TracksByGenreArgs['moodParam'];
};
