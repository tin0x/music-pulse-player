import type { ChangeDurationRangeAction, ChangeLoudnessRangeAction, PlayNextAction } from '@entities/player/types.ts';
import { createAction } from '@reduxjs/toolkit';

export const playNext = createAction<PlayNextAction>('player/playNext');
export const playPrevious = createAction('player/playPrevious');
export const changeDurationRange = createAction<ChangeDurationRangeAction>('player/changeDurationRange');
export const changeLoudnessRange = createAction<ChangeLoudnessRangeAction>('player/changeLoudnessRange');
export const toggleFavorite = createAction<{ type: 'track' | 'artist'; id: string }>('player/toggleFavoriteTrack');
