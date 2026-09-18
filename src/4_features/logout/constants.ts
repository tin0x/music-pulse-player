import type { SignOutErrorCode } from '@features/logout/types';

const signOutErrorMessages: Record<SignOutErrorCode, string> = {
  OVER_REQUEST_RATE_LIMIT: 'Too many attempts, please try again later',
  UNEXPECTED_FAILURE: 'Something went wrong, please try again later',
};

export default signOutErrorMessages;
