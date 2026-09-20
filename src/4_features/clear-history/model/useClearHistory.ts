import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { useFetchFavoritesQuery } from '@entities/favorite';
import { addMessage } from '@entities/user/model/userSlice';
import { useClearHistoryMutation } from '@features/clear-history/api/favoriteApi';
import type { ApiError } from '@features/toggle-favorite';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate';

export const useClearHistory = (type: 'artists' | 'tracks') => {
  const dispatch = useAppDispatch();
  const { data: favorites, isFetching, isError } = useFetchFavoritesQuery();
  const [clear, { isLoading: isClearLoading }] = useClearHistoryMutation();
  const { session } = useAuth();

  const userId = session?.user?.id;
  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const items = type === 'artists' ? favorites?.artists : favorites?.tracks;
  const isEmpty = !items || items.length === 0;

  const handleClearHistory = async () => {
    if (!userId || isEmpty) return;

    const entityType = type === 'artists' ? 'artist' : 'track';

    try {
      await clear({ userId, entityType }).unwrap();
      dispatch(
        addMessage({
          id: crypto.randomUUID(),
          title: t.str.messageTitleHistory,
          text: t.func.messageTextHistory(type),
        }),
      );
    } catch (error) {
      const errorInfo = error as ApiError;
      console.error(`${errorInfo.data.code} : ${errorInfo.data.message}`);
      return;
    }
  };

  const message =
    currentLanguage === 'en'
      ? `Are you sure you want to remove all ${type} from your favorites list ?`
      : `Ви впевнені, що хочете видалити всіх ${t.str[type]} зі списку вподобань?`;

  return { handleClearHistory, message, currentLanguage, isLoading: isFetching || isClearLoading, isEmpty, isError };
};
