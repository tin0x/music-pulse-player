import { useCallback } from 'react';
import type { Track } from '@entities/track/types.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getRecentlyPlayedTracks } from '@entities/player/model/selectors.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { TogglePlayback } from '@features/player-controls';

export const useInitRecentlyPlayedWidget = () => {
  const playedTracks = useAppSelector(getRecentlyPlayedTracks);
  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

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

  return { lang, t, renderTogglePlayback };
};
