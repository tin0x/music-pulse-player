import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useInitArtistPage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');
  const currentPage = page && !isNaN(Number(page)) ? Number(page) : 1;

  useEffect(() => {
    const SEARCH_PARAMS = ['page'];

    const isPageInvalid = !page || isNaN(Number(page));
    const hasTrashParams = Array.from(searchParams.keys()).some((key) => !SEARCH_PARAMS.includes(key));

    if (isPageInvalid || hasTrashParams) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('page', currentPage.toString());
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [currentPage, page, searchParams, setSearchParams]);

  const itemsPerPage = 10;

  return { id, currentPage, itemsPerPage };
};
