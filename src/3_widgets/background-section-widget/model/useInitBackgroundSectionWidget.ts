import { useGetTrackByIdQuery } from '@entities/track/api/trackApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import type { BackgroundSectionWidgetProps } from '@widgets/background-section-widget/types.ts';
import { useGetArtistByIdQuery } from '@entities/artist/api/artistApi.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getUser } from '@entities/user/model/selectors.ts';

export const useInitBackgroundSectionWidget = (
  idParam: BackgroundSectionWidgetProps['idParam'],
  type: BackgroundSectionWidgetProps['type'],
) => {
  const trackQuery = useGetTrackByIdQuery(type === 'track' && idParam ? { id: idParam } : skipToken);
  const artistQuery = useGetArtistByIdQuery(type === 'artist' && idParam ? { id: idParam } : skipToken);

  const coverProfile = useAppSelector(getUser)?.avatar;

  let backgroundUrl: string | undefined = '';
  let isLoading = false;

  if (type === 'artist') {
    backgroundUrl = artistQuery?.data?.avatar;
    isLoading = artistQuery.isLoading || artistQuery?.isFetching;
  }

  if (type === 'track') {
    backgroundUrl = trackQuery.data?.[0]?.cover;
    isLoading = trackQuery.isLoading || trackQuery?.isFetching;
  }

  if (type === 'profile') {
    backgroundUrl = coverProfile || '';
    isLoading = false;
  }

  return { backgroundUrl, isLoading };
};
