import useAuth from '@app/providers/auth/useAuth';
import { useGetArtistByIdQuery } from '@entities/artist/api/artistApi.ts';
import { useGetTrackByIdQuery } from '@entities/track/api/trackApi.ts';
import { useGetUserInfoQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import type { BackgroundSectionWidgetProps } from '@widgets/background-section-widget/types.ts';

export const useInitBackgroundSectionWidget = (
  idParam: BackgroundSectionWidgetProps['idParam'],
  type: BackgroundSectionWidgetProps['type'],
) => {
  const trackQuery = useGetTrackByIdQuery(type === 'track' && idParam ? { id: idParam } : skipToken);
  const artistQuery = useGetArtistByIdQuery(type === 'artist' && idParam ? { id: idParam } : skipToken);
  const { session } = useAuth();
  const userId = session?.user?.id;
  const { data } = useGetUserInfoQuery(userId ? { userId } : skipToken);

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
    backgroundUrl = data?.avatar || '';
    isLoading = false;
  }

  return { backgroundUrl, isLoading };
};
