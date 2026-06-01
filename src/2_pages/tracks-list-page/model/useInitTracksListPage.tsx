import { useParams, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

export const useInitTracksListPage = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  const limitParam = searchParams.get('limit');
  const tracksLimitPerPage = limitParam ? parseInt(limitParam) : undefined;

  return { type, tracksLimitPerPage, t };
};
