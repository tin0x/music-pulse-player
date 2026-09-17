import type { LoginErrorCode } from '@features/login/types';

export const loginErrorMessages: Record<LoginErrorCode, string> = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_NOT_CONFIRMED: 'Please confirm your email before logging in',
  USER_NOT_FOUND: 'No account found with this email',
  USER_BANNED: 'This account has been banned',
  TOO_MANY_REQUESTS: 'Too many attempts, please try again later',
  OVER_REQUEST_RATE_LIMIT: 'Too many attempts, please try again later',
  SESSION_EXPIRED: 'Your session has expired, please log in again',
  REFRESH_TOKEN_NOT_FOUND: 'Session error, please log in again',
  REFRESH_TOKEN_ALREADY_USED: 'Session error, please log in again',
  SIGNUP_DISABLED: 'Sign-up is currently disabled',
  EMAIL_ADDRESS_INVALID: 'Invalid email address format',
  VALIDATION_FAILED: 'Invalid input, please check your data',
  UNKNOWN_ERROR: 'Login failed, please try again',
};
