import React from 'react';
import classes from '@entities/user/ui/message-item/MessageItem.module.scss';
import type { MessageItemProps } from '@entities/user/types.ts';

const MessageItem: React.FC<MessageItemProps> = ({ title, text, children }) => {
  return (
    <div className={classes.messageItem}>
      <div className={classes.messageItemInfo}>
        <span className={classes.messageItemTitle}>{title}</span>
        <p className={classes.messageItemText}>{text}</p>
      </div>
      {children}
    </div>
  );
};

export default MessageItem;
