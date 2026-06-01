import { type RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDivElement | null>, handler: () => void) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    };

    document.addEventListener('click', listener, true);
    return () => document.removeEventListener('click', listener, true);
  }, [ref, handler]);
};
