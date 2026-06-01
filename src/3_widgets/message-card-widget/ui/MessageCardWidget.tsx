import React from 'react';
import MessageItem from '@entities/user/ui/message-item/MessageItem.tsx';
import ButtonDeleteMessage from '@features/delete-message/ui/ButtonDeleteMessage.tsx';
import type { MessageCardWidgetProps } from '@widgets/message-card-widget/type.ts';

const MessageCardWidget: React.FC<MessageCardWidgetProps> = ({ id, title, text }) => {
  return (
    <MessageItem title={title} text={text}>
      <ButtonDeleteMessage itemId={id} />
    </MessageItem>
  );
};

export default MessageCardWidget;
