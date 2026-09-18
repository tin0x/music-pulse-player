import { updateUserInfoErrorMessages } from '@features/update-user-info/constants';
import type { ApiError } from '@features/update-user-info/types';
import type { PostgrestError } from '@supabase/supabase-js';

const mapUpdateUserInfoError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'UNIQUE_VIOLATION',
          message: updateUserInfoErrorMessages.UNIQUE_VIOLATION,
        },
      };

    case '23503':
      return {
        status: 400,
        data: {
          code: 'FOREIGN_KEY_VIOLATION',
          message: updateUserInfoErrorMessages.FOREIGN_KEY_VIOLATION,
        },
      };

    case '23502':
      return {
        status: 400,
        data: {
          code: 'NOT_NULL_VIOLATION',
          message: updateUserInfoErrorMessages.NOT_NULL_VIOLATION,
        },
      };

    case '23514':
      return {
        status: 400,
        data: {
          code: 'CHECK_VIOLATION',
          message: updateUserInfoErrorMessages.CHECK_VIOLATION,
        },
      };

    case '22P02':
      return {
        status: 400,
        data: {
          code: 'INVALID_INPUT',
          message: updateUserInfoErrorMessages.INVALID_INPUT,
        },
      };

    case 'PGRST301':
      return {
        status: 400,
        data: {
          code: 'JWT_INVALID',
          message: updateUserInfoErrorMessages.JWT_INVALID,
        },
      };

    default:
      return {
        status: 500,
        data: {
          code: 'UNKNOWN_ERROR',
          message: updateUserInfoErrorMessages.UNKNOWN_ERROR,
        },
      };
  }
};

export default mapUpdateUserInfoError;
