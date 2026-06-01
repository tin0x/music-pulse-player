import { useSearchParams } from 'react-router-dom';
import React from 'react';

export const useFilterTracks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUpdateFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    const params = new URLSearchParams(searchParams);

    params.set(name, value);
    params.set('page', '1');

    setSearchParams(params);
  };

  const currentSort = searchParams.get('sort');
  const currentMood = searchParams.get('mood');

  return { handleUpdateFilter, currentSort, currentMood };
};
