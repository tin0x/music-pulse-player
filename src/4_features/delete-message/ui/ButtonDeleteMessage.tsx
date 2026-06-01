import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import IconDelete from '@shared/assets/icons/delete.svg?react';
import classes from '@features/delete-message/ui/ButtonDeleteMessage.module.scss';
import { useDeleteMessage } from '@features/delete-message/model/useDeleteMessage.ts';

const ButtonDeleteMessage: React.FC<{ itemId: string }> = ({ itemId }) => {
  const { handleDeleteMessage } = useDeleteMessage(itemId);

  return (
    <Button
      className={classes.buttonDeleteMessage}
      onClick={handleDeleteMessage}
      aria-label="delete current message"
      lang="en"
    >
      <IconDelete aria-hidden />
    </Button>
  );
};

export default ButtonDeleteMessage;
