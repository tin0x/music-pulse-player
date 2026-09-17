import type { LoginForm } from '@features/login/schemas/LoginSchema';
import type { UseFormSetError } from 'react-hook-form';

export type LoginArgs = {
  email: string;
  password: string;
};

export type LoginErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'EMAIL_NOT_CONFIRMED'
  | 'USER_NOT_FOUND'
  | 'USER_BANNED'
  | 'TOO_MANY_REQUESTS'
  | 'OVER_REQUEST_RATE_LIMIT'
  | 'SESSION_EXPIRED'
  | 'REFRESH_TOKEN_NOT_FOUND'
  | 'REFRESH_TOKEN_ALREADY_USED'
  | 'SIGNUP_DISABLED'
  | 'EMAIL_ADDRESS_INVALID'
  | 'VALIDATION_FAILED'
  | 'UNKNOWN_ERROR';

export type ApiError = {
  status: string | number;
  data: {
    code: LoginErrorCode;
    message: string;
  };
};

export type UseLoginArgs = {
  setError: UseFormSetError<LoginForm>;
};
