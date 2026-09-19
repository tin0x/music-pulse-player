import type { FavoriteErrorCode } from '@features/toggle-favorite/types';

const favoriteErrorMessage: Record<FavoriteErrorCode, string> = {
  FAVORITE_ADD_FAILED: 'Failed to add the item to favorites',
  FAVORITE_TARGET_NOT_FOUND: 'This item is no longer available.',
};

export default favoriteErrorMessage;
