import { registerErrorMessages } from '@features/register/constants';
import type { ApiError } from '@features/register/types';
import { appErrorMessages } from '@shared/api/errors/constants';
import type { AuthError } from '@supabase/supabase-js';

const mapRegisterError = (error: AuthError): ApiError => {
  switch (error.code) {
    case 'invalid_credentials':
      return {
        status: 401,
        data: {
          code: 'INVALID_CREDENTIALS',
          message: registerErrorMessages.INVALID_CREDENTIALS,
        },
      };

    case 'over_email_send_rate_limit':
      return {
        status: 429,
        data: {
          code: 'OVER_EMAIL_SENT_RATE_LIMIT',
          message: registerErrorMessages.OVER_EMAIL_SENT_RATE_LIMIT,
        },
      };

    case 'email_address_invalid':
      return {
        status: 400,
        data: {
          code: 'EMAIL_ADDRESS_INVALID',
          message: registerErrorMessages.EMAIL_ADDRESS_INVALID,
        },
      };

    case 'user_already_exists':
      return {
        status: 409,
        data: {
          code: 'USER_ALREADY_EXISTS',
          message: registerErrorMessages.USER_ALREADY_EXISTS,
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

export default mapRegisterError;
