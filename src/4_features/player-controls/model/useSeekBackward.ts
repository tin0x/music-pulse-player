import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { changeDurationRange } from '@entities/player/model/actions.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsBuffering } from '@entities/player/model/selectors.ts';

export const useSeekBackward = () => {
  const dispatch = useAppDispatch();

  const handleSeekBackward = () => {
    dispatch(changeDurationRange({ type: 'relative', range: -10 }));
  };

  const isBuffering = useAppSelector(getIsBuffering);

  return { handleSeekBackward, isBuffering };
};
