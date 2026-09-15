import useLanguage from '@app/providers/language/useLanguage';
import { getRecentlyPlayedTracks } from '@entities/player/model/selectors.ts';
import type { Track } from '@entities/track/types.ts';
import { TogglePlayback } from '@features/player-controls';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useCallback } from 'react';

export const useInitRecentlyPlayedWidget = () => {
  const playedTracks = useAppSelector(getRecentlyPlayedTracks);
  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const renderTogglePlayback = useCallback(
    (track: Track) => {
      return (
        <TogglePlayback
          track={{
            id: track.id,
            source: track.streamUrl,
            poster: track.cover || '',
            name: track.title,
            artist: {
              id: track.user.id,
              name: track.user.name,
            },
          }}
          playerContext={{
            type: 'recently',
            params: {
              ids: playedTracks,
              limit: playedTracks?.length,
            },
          }}
        />
      );
    },
    [playedTracks],
  );

  return { lang: currentLanguage, t, renderTogglePlayback };
};
