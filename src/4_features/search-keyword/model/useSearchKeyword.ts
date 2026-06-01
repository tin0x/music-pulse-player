import React, { type SetStateAction } from 'react';

export const useSearchKeyword = (setter: React.Dispatch<SetStateAction<string>>) => {
  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .trimStart()
      .replace(/\s\s+/g, ' ')
      .replace(/[^a-z0-9\s]/gi, '');
    setter(value);
  };

  return { handleSearchKeyword };
};
