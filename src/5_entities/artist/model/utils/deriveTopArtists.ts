import type { ArtistTrack, TopArtist } from '@entities/artist/types.ts';

export const deriveTopArtists = (tracks: ArtistTrack[], quantity: number): TopArtist[] => {
  if (!tracks || tracks.length === 0) return [];

  const artistsMap: Record<string, TopArtist> = {};

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const user = track.user;

    if (!artistsMap[user.id]) {
      artistsMap[user.id] = {
        id: user.id,
        name: user.name,
        avatar: user.avatar ?? null,
        followerCount: user.followerCount,
        trackCount: 1,
      };
    } else {
      artistsMap[user.id].trackCount += 1;
    }
  }

  const allArtists = Object.values(artistsMap);
  const sortedArtists = [...allArtists].sort((a, b) => b.followerCount - a.followerCount);

  return sortedArtists.slice(0, quantity);
};
