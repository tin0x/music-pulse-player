import { loginErrorMessages } from '@features/login/constants';
import type { ApiError } from '@features/login/types';
import { appErrorMessages } from '@shared/api/errors/constants';
import type { AuthError } from '@supabase/supabase-js';

const mapLoginError = (error: AuthError): ApiError => {
  switch (error.code) {
    case 'invalid_credentials':
      return {
        status: error.status ?? 400,
        data: { code: 'INVALID_CREDENTIALS', message: loginErrorMessages.INVALID_CREDENTIALS },
      };

    case 'email_not_confirmed':
      return {
        status: error.status ?? 400,
        data: { code: 'EMAIL_NOT_CONFIRMED', message: loginErrorMessages.EMAIL_NOT_CONFIRMED },
      };

    case 'user_not_found':
      return {
        status: error.status ?? 400,
        data: { code: 'USER_NOT_FOUND', message: loginErrorMessages.USER_NOT_FOUND },
      };

    case 'user_banned':
      return {
        status: error.status ?? 403,
        data: { code: 'USER_BANNED', message: loginErrorMessages.USER_BANNED },
      };

    case 'too_many_requests':
      return {
        status: error.status ?? 429,
        data: { code: 'TOO_MANY_REQUESTS', message: loginErrorMessages.TOO_MANY_REQUESTS },
      };

    case 'over_request_rate_limit':
      return {
        status: error.status ?? 429,
        data: { code: 'OVER_REQUEST_RATE_LIMIT', message: loginErrorMessages.OVER_REQUEST_RATE_LIMIT },
      };

    case 'session_expired':
      return {
        status: error.status ?? 401,
        data: { code: 'SESSION_EXPIRED', message: loginErrorMessages.SESSION_EXPIRED },
      };

    case 'refresh_token_not_found':
      return {
        status: error.status ?? 401,
        data: { code: 'REFRESH_TOKEN_NOT_FOUND', message: loginErrorMessages.REFRESH_TOKEN_NOT_FOUND },
      };

    case 'refresh_token_already_used':
      return {
        status: error.status ?? 401,
        data: { code: 'REFRESH_TOKEN_ALREADY_USED', message: loginErrorMessages.REFRESH_TOKEN_ALREADY_USED },
      };

    case 'signup_disabled':
      return {
        status: error.status ?? 403,
        data: { code: 'SIGNUP_DISABLED', message: loginErrorMessages.SIGNUP_DISABLED },
      };

    case 'email_address_invalid':
      return {
        status: error.status ?? 400,
        data: { code: 'EMAIL_ADDRESS_INVALID', message: loginErrorMessages.EMAIL_ADDRESS_INVALID },
      };

    case 'validation_failed':
      return {
        status: error.status ?? 400,
        data: { code: 'VALIDATION_FAILED', message: loginErrorMessages.VALIDATION_FAILED },
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

export default mapLoginError;
