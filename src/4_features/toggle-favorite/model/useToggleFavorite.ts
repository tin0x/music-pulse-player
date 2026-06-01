import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { toggleFavorite } from '@entities/player/model/actions.ts';

export const useToggleFavorite = (type: 'track' | 'artist', id: string | undefined) => {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(getFavoriteList);

  const handleToggleFavorite = () => {
    if (type === 'artist') {
      dispatch(toggleFavorite({ type: 'artist', id: id || '' }));
      return;
    }

    if (type === 'track') {
      dispatch(toggleFavorite({ type: 'track', id: id || '' }));
    }
  };

  const isFavoriteTrack = id ? favoriteList.tracks.includes(id) : false;
  const isFavoriteArtist = id ? favoriteList?.artists?.includes(id) : false;

  const isFavorite = type === 'track' ? isFavoriteTrack : isFavoriteArtist;

  return { isFavorite, handleToggleFavorite };
};
