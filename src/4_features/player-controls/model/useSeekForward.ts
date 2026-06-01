import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsBuffering } from '@entities/player/model/selectors.ts';
import { changeDurationRange } from '@entities/player/model/actions.ts';

export const useSeekForward = () => {
  const dispatch = useAppDispatch();

  const handleSeekForward = () => {
    dispatch(changeDurationRange({ type: 'relative', range: 10 }));
  };

  const isBuffering = useAppSelector(getIsBuffering);

  return { handleSeekForward, isBuffering };
};
