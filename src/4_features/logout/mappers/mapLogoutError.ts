import signOutErrorMessages from '@features/logout/constants';
import type { ApiError } from '@features/logout/types';
import type { AuthError } from '@supabase/supabase-js';

const mapLogoutError = (error: AuthError): ApiError => {
  switch (error.code) {
    case 'over_request_rate_limit':
      return {
        status: error.status ?? 429,
        data: { code: 'OVER_REQUEST_RATE_LIMIT', message: signOutErrorMessages.OVER_REQUEST_RATE_LIMIT },
      };

    default:
      return {
        status: error.status ?? 500,
        data: { code: 'UNEXPECTED_FAILURE', message: signOutErrorMessages.UNEXPECTED_FAILURE },
      };
  }
};

export default mapLogoutError;
