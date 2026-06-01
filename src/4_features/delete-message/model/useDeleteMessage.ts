import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { deleteMessage } from '@entities/user/model/userSlice.ts';
import React from 'react';

export const useDeleteMessage = (itemId: string) => {
  const dispatch = useAppDispatch();

  const handleDeleteMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteMessage({ itemId }));
  };

  return { handleDeleteMessage };
};
