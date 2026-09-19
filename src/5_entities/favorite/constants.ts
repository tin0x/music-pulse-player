import type { FavoriteErrorCode } from '@entities/favorite/types';

const favoriteErrorMessages: Record<FavoriteErrorCode, string> = {
  FAVORITES_FETCH_FAILED: 'Failed to load favorites. Please try again.',
};

export default favoriteErrorMessages;
