import React from 'react';

export type getUserInfoArgs = {
  userId: string;
};

type AppErrorCode = 'USER_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: string | number;
  data: {
    code: AppErrorCode;
    message: string;
  };
};

export type getUserInfo = {
  id: string;
  username: string;
  avatar: string;
  createdAt: string;
};

type UserInfo = {
  username: string | null;
  email: string | null;
  avatar: string | null;
};

export type UserMessage = {
  id: string;
  title: string;
  text: string;
};

export type InitialState = {
  messages: UserMessage[];
};

export type MessageItemProps = {
  title: string;
  text: string;
  children: React.ReactNode;
};

export type UserPayload = Omit<UserInfo, 'subscriptionType' | 'statusUser'>;
export type MessagePayload = UserMessage;

export type ProfileItemProps = {
  user?: {
    id: string;
    username: string;
    avatar: string;
    createdAt: string;
  };
  messages: UserMessage[];
  renderMessage?: (m: UserMessage) => React.ReactNode;
  isActive: boolean;
  lang: 'en' | 'ua';
};
