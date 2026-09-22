import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { useFetchFavoritesQuery } from '@entities/favorite';
import { useClearHistoryMutation } from '@features/clear-history/api/favoriteApi';
import type { ApiError } from '@features/toggle-favorite';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/model/toastSlice';
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

  const renderMessage = () => {
    if (currentLanguage === 'en') {
      return `Cleared favorite ${type} history`;
    } else {
      return `Очищено історію улюблених ${t.str[type]}`;
    }
  };

  const handleClearHistory = async () => {
    if (!userId || isEmpty) return;

    const entityType = type === 'artists' ? 'artist' : 'track';

    try {
      await clear({ userId, entityType }).unwrap();
      dispatch(showToast({ eventType: 'success', customMessage: renderMessage() }));
    } catch (error) {
      const errorInfo = error as ApiError;
      dispatch(showToast({ eventType: 'error', customMessage: errorInfo.data.message }));
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
