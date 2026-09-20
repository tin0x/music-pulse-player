import type { AppDispatch, RootState } from '@app/store/store.ts';
import { setupChangeDurationRange } from '@entities/player/model/listeners/changeDurationRange.ts';
import { setupChangeLoudnessRange } from '@entities/player/model/listeners/changeLoudnessRange.ts';
import { setupMuteLoudness } from '@entities/player/model/listeners/muteLoudness.ts';
import { setupPlayNext } from '@entities/player/model/listeners/playNext.ts';
import { setupPlayPrevious } from '@entities/player/model/listeners/playPrevious.ts';
import { setupRecentlyPlayed } from '@entities/player/model/listeners/recentlyPlayed.ts';
import { setupResetPlayerSettings } from '@entities/player/model/listeners/resetPlayerSettings';
import { setupTogglePlayback } from '@entities/player/model/listeners/togglePlayback.ts';
import { createListenerMiddleware, type TypedStartListening } from '@reduxjs/toolkit';

export const playerListener = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startPlayerListening = playerListener.startListening as AppStartListening;

setupChangeDurationRange(startPlayerListening);
setupChangeLoudnessRange(startPlayerListening);
setupTogglePlayback(startPlayerListening);
setupPlayNext(startPlayerListening);
setupPlayPrevious(startPlayerListening);
setupMuteLoudness(startPlayerListening);
setupRecentlyPlayed(startPlayerListening);
setupResetPlayerSettings(startPlayerListening);
