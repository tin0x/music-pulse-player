import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { showToast } from '@shared/lib/slices/toast/model/toastSlice';
import { useEffect } from 'react';

export const useCheckStatusOffline = () => {
  const dispatch = useAppDispatch();

  const goOnline = () => {
    dispatch(showToast({ eventType: 'success', messageType: 'internet' }));
  };

  const goOffline = () => {
    dispatch(showToast({ eventType: 'error', messageType: 'internet' }));
  };

  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  });
};
