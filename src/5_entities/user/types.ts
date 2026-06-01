import React from 'react';

type UserInfo = {
  username: string | null;
  email: string | null;
  subscriptionType: 'free' | 'premium';
  statusUser: 'listener' | 'blog';
  avatar: string | null;
};

export type UserMessage = {
  id: string;
  title: string;
  text: string;
};

export type InitialState = {
  user: UserInfo | null;
  messages: UserMessage[];
  language: 'en' | 'ua';
};

export type MessageItemProps = {
  title: string;
  text: string;
  children: React.ReactNode;
};

export type UserPayload = Omit<UserInfo, 'subscriptionType' | 'statusUser'>;
export type MessagePayload = UserMessage;

export type ProfileItemProps = {
  user: UserInfo;
  messages: UserMessage[];
  renderMessage?: (m: UserMessage) => React.ReactNode;
  isActive: boolean;
  lang: InitialState['language'];
};

export type ButtonProfileProps = {
  children: React.ReactNode;
  ariaLabel: string;
  lang: string;
  isDisabled?: boolean;
  onClick: () => void;
};
