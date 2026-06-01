import { useParams } from 'react-router-dom';

export const useInitTrackPage = () => {
  const { id: trackIdParam } = useParams<{ id: string }>();

  return { trackIdParam };
};
