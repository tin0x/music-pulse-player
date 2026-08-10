import React from 'react';
import type { MessageCardWidgetProps } from '@widgets/message-card-widget/type.ts';
import { MessageItem } from '@entities/user';
import { DeleteMessage } from '@features/delete-message';

const MessageCardWidget: React.FC<MessageCardWidgetProps> = ({ id, title, text }) => {
  return (
    <MessageItem title={title} text={text}>
      <DeleteMessage itemId={id} />
    </MessageItem>
  );
};

export default MessageCardWidget;
