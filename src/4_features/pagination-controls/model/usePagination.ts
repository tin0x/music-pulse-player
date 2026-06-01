import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

export const usePagination = (totalTracks: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [siblingCount] = useState(() => (window.innerWidth <= 768 ? 0 : 2));

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;

  const offset = (page - 1) * limit;

  useEffect(() => {
    document.querySelector('main')?.lastElementChild?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [page]);

  const maxPages = Math.ceil(totalTracks / limit);
  const isLastPage = page >= maxPages;
  const isFirstPage = page <= 1;

  const handleNextPage = useCallback(() => {
    if (isLastPage) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', (page + 1).toString());
    setSearchParams(newParams);
  }, [isLastPage, page, searchParams, setSearchParams]);

  const handlePreviousPage = useCallback(() => {
    if (isFirstPage) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', (page - 1).toString());
    setSearchParams(newParams);
  }, [isFirstPage, page, searchParams, setSearchParams]);

  const handleTargetPage = useCallback(
    (targetPage: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', targetPage.toString());
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const startPage = Math.max(1, page - siblingCount);
  const endPage = Math.min(maxPages, page + siblingCount);

  const slicedPages = [];

  for (let i = startPage; i <= endPage; i++) {
    slicedPages.push(i);
  }

  return {
    page,
    offset,
    isFirstPage,
    isLastPage,
    maxPages,
    startPage,
    endPage,
    slicedPages,
    handleNextPage,
    handlePreviousPage,
    handleTargetPage,
  };
};
