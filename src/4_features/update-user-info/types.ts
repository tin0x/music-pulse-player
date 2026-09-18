export type UpdateUserInfoArgs = {
  userId: string;
  avatar?: string;
};

export type UpdateUserInfoErrorCode =
  | 'UNIQUE_VIOLATION'
  | 'FOREIGN_KEY_VIOLATION'
  | 'NOT_NULL_VIOLATION'
  | 'CHECK_VIOLATION'
  | 'INVALID_INPUT'
  | 'JWT_INVALID'
  | 'CONNECTION_ERROR'
  | 'UPDATE_BLOCKED'
  | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number;
  data: {
    code: UpdateUserInfoErrorCode;
    message: string;
  };
};
