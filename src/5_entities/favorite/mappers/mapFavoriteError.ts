import favoriteErrorMessages from '@entities/favorite/constants';
import type { ApiError } from '@entities/favorite/types';
import type { PostgrestError } from '@supabase/supabase-js';

const mapFavoriteError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    default:
      return {
        status: 500,
        data: {
          code: 'FAVORITES_FETCH_FAILED',
          message: favoriteErrorMessages.FAVORITES_FETCH_FAILED,
        },
      };
  }
};

export default mapFavoriteError;
