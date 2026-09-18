import type { UpdateUserInfoErrorCode } from '@features/update-user-info/types';

export const updateUserInfoErrorMessages: Record<UpdateUserInfoErrorCode, string> = {
  UNIQUE_VIOLATION: 'This value is already taken',
  FOREIGN_KEY_VIOLATION: 'Related record does not exist',
  NOT_NULL_VIOLATION: 'Required field is missing',
  CHECK_VIOLATION: "This value doesn't meet the requirements",
  INVALID_INPUT: 'Invalid data format',
  JWT_INVALID: 'Your session has expired, please log in again',
  CONNECTION_ERROR: 'Server is unavailable, please try again later',
  UPDATE_BLOCKED: "You don't have permission to update this profile",
  UNKNOWN_ERROR: 'Something went wrong, please try again later',
};
