import favoriteErrorMessage from '@features/toggle-favorite/constants';
import type { ApiError } from '@features/toggle-favorite/types';
import type { PostgrestError } from '@supabase/supabase-js';

const mapFavoriteError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23503':
      return {
        status: 400,
        data: {
          code: 'FAVORITE_TARGET_NOT_FOUND',
          message: favoriteErrorMessage.FAVORITE_TARGET_NOT_FOUND,
        },
      };

    default:
      return {
        status: 500,
        data: {
          code: 'FAVORITE_ADD_FAILED',
          message: favoriteErrorMessage.FAVORITE_ADD_FAILED,
        },
      };
  }
};

export default mapFavoriteError;
