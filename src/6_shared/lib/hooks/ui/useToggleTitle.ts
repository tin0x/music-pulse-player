import { useEffect } from 'react';

export const useToggleTitle = (currentTitle: string) => {
  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);
};
