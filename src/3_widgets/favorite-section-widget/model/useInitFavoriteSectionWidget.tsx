import { useGetArtistsByIdsQuery } from '@entities/artist/api/artistApi.ts';
import { useFetchFavoritesQuery } from '@entities/favorite';
import { getCurrentTrackId, getIsBuffering, getIsPlaying } from '@entities/player/model/selectors.ts';
import { useGetTracksByIdsQuery } from '@entities/track/api/trackApi.ts';
import type { Track } from '@entities/track/types.ts';
import { DurationChange } from '@features/duration-change';
import { TogglePlayback } from '@features/player-controls';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useCallback } from 'react';

const limitTracks = 10;
const EMPTY_IDS: string[] = [];

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

export const useInitFavoriteSectionWidget = () => {
  const {
    data: favorites,
    isLoading: isLoadingFavorites,
    error: errorFavorites,
    refetch: refetchFavorites,
  } = useFetchFavoritesQuery();

  const rawArtists = favorites?.artists ?? EMPTY_IDS;
  const rawTracks = favorites?.tracks ?? EMPTY_IDS;

  const isPlaying = useAppSelector(getIsPlaying);
  const isBuffering = useAppSelector(getIsBuffering);
  const currentTrackId = useAppSelector(getCurrentTrackId);

  const {
    data: artistsData,
    isLoading: isLoadingArtists,
    error: errorArtists,
    refetch: refetchArtists,
  } = useGetArtistsByIdsQuery(rawArtists.length > 0 ? { ids: rawArtists } : skipToken);

  const {
    data: tracksData,
    isLoading: isLoadingTracks,
    error: errorTracks,
    refetch: refetchTracks,
  } = useGetTracksByIdsQuery(rawTracks.length > 0 ? { ids: rawTracks } : skipToken);

  const artists = rawArtists.length === 0 ? [] : artistsData;
  const tracks = rawTracks.length === 0 ? [] : tracksData;

  const handleRefetch = () => {
    refetchFavorites();
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

  return {
    artists,
    tracks,
    isLoading: isLoadingFavorites || isLoadingArtists || isLoadingTracks,
    isError: !!(errorFavorites || errorArtists || errorTracks),
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
