import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentTrackId, getFavoriteList, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useGetArtistsByIdsQuery } from '@entities/artist/api/artistApi.ts';
import { useGetTracksByIdsQuery } from '@entities/track/api/trackApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useCallback } from 'react';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import type { Track } from '@entities/track/types.ts';
import DurationChange from '@features/duration-change/ui/DurationChange.tsx';

export const useInitFavoriteSectionWidget = () => {
  const { artists: rawArtists, tracks: rawTracks } = useAppSelector(getFavoriteList);
  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);

  const limitTracks = 10;

  const {
    data: artistsData,
    isLoading: isLoadingArtists,
    error: errorArtists,
    refetch: refetchArtists,
  } = useGetArtistsByIdsQuery(rawArtists && rawArtists.length > 0 ? { ids: rawArtists } : skipToken);
  const {
    data: tracksData,
    isLoading: isLoadingTracks,
    error: errorTracks,
    refetch: refetchTracks,
  } = useGetTracksByIdsQuery(rawTracks && rawTracks.length > 0 ? { ids: rawTracks } : skipToken);

  const artists = rawArtists.length === 0 ? [] : artistsData;
  const tracks = rawTracks.length === 0 ? [] : tracksData;

  const handleRefetch = () => {
    refetchArtists();
    refetchTracks();
  };

  const renderAction = useCallback(
    (track: Track) => (
      <TogglePlayback
        track={{
          id: track.id,
          source: track.streamUrl,
          poster: track.streamUrl,
          name: track.title,
          artist: {
            id: track.user.id,
            name: track.user.name,
          },
        }}
        playerContext={{
          type: 'favorite',
          params: {
            ids: rawTracks,
            limit: limitTracks,
          },
        }}
      />
    ),
    [rawTracks],
  );

  const renderDurationChange = useCallback(
    (track: Track) => <DurationChange trackId={track.id} duration={track.duration} />,
    [],
  );

  const messagePlaceholder = {
    en: {
      all: "You don't have any favorite tracks or artists, add your first idol or favorite track!",
      artist: 'Add your first idol!',
      track: 'Add your first favorite track!',
    },
    ua: {
      all: 'У вас немає улюблених треків чи виконавців, додайте свого першого кумира чи улюблений трек!',
      artist: 'Додайте свого першого кумира!',
      track: 'Додайте свій перший улюблений трек!',
    },
  };

  return {
    artists,
    tracks: tracks,
    isLoading: isLoadingArtists || isLoadingTracks,
    isError: !!(errorArtists || errorTracks),
    isPlaying,
    isBuffering,
    currentTrackId,
    limitTracks,
    messagePlaceholder,
    handleRefetch,
    renderAction,
    renderDurationChange,
  };
};
