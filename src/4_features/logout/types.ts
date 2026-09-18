export type SignOutErrorCode = 'OVER_REQUEST_RATE_LIMIT' | 'UNEXPECTED_FAILURE';

export type ApiError = {
  status: number;
  data: {
    code: SignOutErrorCode;
    message: string;
  };
};

export type LogoutProps = {
  children: React.ReactNode;
  ariaLabel: string;
  lang: string;
  isDisabled?: boolean;
  onClick: () => void;
};
