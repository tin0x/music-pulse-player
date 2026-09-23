import useAuth from '@app/providers/auth/useAuth';
import { useFetchFavoritesQuery } from '@entities/favorite';
import type { ApiError } from '@entities/favorite/types';
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '@features/toggle-favorite/api/favoriteApi';

export const useToggleFavorite = (type: 'track' | 'artist', id: string) => {
  const { data } = useFetchFavoritesQuery();
  const [add, { isLoading: isAddLoading }] = useAddFavoriteMutation();
  const [remove, { isLoading: isRemoveLoading }] = useRemoveFavoriteMutation();
  const { session } = useAuth();

  const isFavorite = data?.[type === 'track' ? 'tracks' : 'artists'].includes(id) ?? false;

  const handleToggleFavorite = async () => {
    const userId = session?.user?.id;

    if (!userId) return;

    const args = { entityType: type, entityId: id, userId };

    try {
      if (isFavorite) {
        await remove(args).unwrap();
      } else {
        await add(args).unwrap();
      }
    } catch (error) {
      const errorInfo = error as ApiError;
      console.error(`${errorInfo.data.code}: ${errorInfo.data.message}`);
      return;
    }
  };

  return { isFavorite, isLoading: isAddLoading || isRemoveLoading, handleToggleFavorite };
};
