import useLanguage from '@app/providers/language/useLanguage';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useParams } from 'react-router-dom';

export const useInitTracksListPage = () => {
  const { type } = useParams<{ type: string }>();

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const itemsPerPage = 50;

  return { type, itemsPerPage, t };
};
