import React from 'react';
import type { UserMessage } from '@entities/user/types.ts';

type Message = UserMessage;

export type ProfileCardWidgetProps = {
  renderMessage: (m: Message) => React.ReactNode;
};
