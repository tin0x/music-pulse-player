import { useParams } from 'react-router-dom';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useInitTracksListPage = () => {
  const { type } = useParams<{ type: string }>();

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  const itemsPerPage = 50;

  return { type, itemsPerPage, t };
};
