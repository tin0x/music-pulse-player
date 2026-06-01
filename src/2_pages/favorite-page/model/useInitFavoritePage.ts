import { useParams } from 'react-router-dom';

export const useInitFavoritePage = () => {
  const { type: paramType } = useParams();

  return { paramType };
};
