import userErrorMessages from '@entities/user/constants';
import type { ApiError } from '@entities/user/types';
import { appErrorMessages } from '@shared/api/errors/constants';
import type { PostgrestError } from '@supabase/supabase-js';

const mapUserError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case 'PGRST116':
      return {
        status: 404,
        data: {
          code: 'USER_NOT_FOUND',
          message: userErrorMessages.USER_NOT_FOUND,
        },
      };

    default:
      return {
        status: 500,
        data: {
          code: 'UNKNOWN_ERROR',
          message: appErrorMessages.UNKNOWN_ERROR,
        },
      };
  }
};

export default mapUserError;
