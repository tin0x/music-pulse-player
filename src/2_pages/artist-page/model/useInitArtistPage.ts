import { useParams, useSearchParams } from 'react-router-dom';

export const useInitArtistPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';
  const pageParam = parseInt(page);

  const limit = searchParams.get('limit') || '10';
  const limitParam = parseInt(limit);

  return { id, pageParam, limitParam };
};
