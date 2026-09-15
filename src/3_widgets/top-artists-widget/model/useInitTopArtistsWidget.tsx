import useLanguage from '@app/providers/language/useLanguage';
import { ToggleFavorite } from '@features/toggle-favorite';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useCallback } from 'react';

export const useInitTopArtistsWidget = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const renderActionToggleFavorite = useCallback(
    (userId: string) => <ToggleFavorite type="artist" id={userId} variantButton="text" />,
    [],
  );

  return { lang: currentLanguage, t, renderActionToggleFavorite };
};
