import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { updateFavoriteList } from '@entities/player/model/playerSlice.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { addMessage } from '@entities/user/model/userSlice.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useClearHistory = (type: 'artists' | 'tracks') => {
  const dispatch = useAppDispatch();
  const { tracks, artists } = useAppSelector(getFavoriteList);

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  const isEmpty = type === 'artists' ? artists.length === 0 : tracks.length === 0;

  const handleClearHistory = () => {
    if (isEmpty) return;

    dispatch(
      updateFavoriteList({
        artists: type === 'artists' ? [] : artists,
        tracks: type === 'tracks' ? [] : tracks,
      }),
    );
    dispatch(
      addMessage({
        id: Date.now().toString(),
        title: t.str.messageTitleHistory,
        text: t.func.messageTextHistory(type),
      }),
    );
  };

  return { handleClearHistory, isEmpty };
};
