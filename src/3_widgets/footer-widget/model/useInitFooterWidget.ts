import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrack } from '@entities/player/model/selectors.ts';

export const useInitFooterWidget = () => {
  const currentTrack = useAppSelector(getCurrentTrack);

  return { currentTrack };
};
