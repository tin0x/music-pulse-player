import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getModePlayer } from '@entities/player/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { setMode } from '@entities/player/model/playerSlice.ts';

export const useChooseRepeatTrack = () => {
  const dispatch = useAppDispatch();
  const modePlayer = useAppSelector(getModePlayer);

  const handleChooseRepeat = () => {
    if (modePlayer === 'repeat') {
      dispatch(setMode(null));
    } else {
      dispatch(setMode('repeat'));
    }
  };

  return { modePlayer, handleChooseRepeat };
};
