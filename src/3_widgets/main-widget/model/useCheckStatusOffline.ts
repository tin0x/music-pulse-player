import React, { useEffect } from 'react';

export const useCheckStatusOffline = () => {
  const [isOffline, setIsOffline] = React.useState(!window.navigator.onLine);

  const goOnline = () => setIsOffline(false);
  const goOffline = () => setIsOffline(true);

  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return { isOffline };
};
