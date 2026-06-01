import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { getModePlayer } from '@entities/player/model/selectors.ts';
import { setMode } from '@entities/player/model/playerSlice.ts';

export const useChooseShuffle = () => {
  const dispatch = useAppDispatch();
  const modePlayer = useAppSelector(getModePlayer);

  const handleChooseShuffle = () => {
    if (modePlayer === 'shuffle') {
      dispatch(setMode(null));
    } else {
      dispatch(setMode('shuffle'));
    }
  };

  return { modePlayer, handleChooseShuffle };
};
