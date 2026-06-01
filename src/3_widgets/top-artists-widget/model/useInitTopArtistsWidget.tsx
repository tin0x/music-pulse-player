import { useCallback } from 'react';
import ToggleFavorite from '@features/toggle-favorite/ui/ToggleFavorite.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useInitTopArtistsWidget = () => {
  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  const renderActionToggleFavorite = useCallback(
    (userId: string) => <ToggleFavorite type="artist" id={userId} variantButton="text" />,
    [],
  );

  return { lang, t, renderActionToggleFavorite };
};
