import type { ArtistTrack } from '@entities/artist/types.ts';
import type { ArtistTrackDTO } from '@entities/artist/schemas/ArtistTracksDTOSchema.ts';

export const mapArtistTrack = (dto: ArtistTrackDTO): ArtistTrack => ({
  id: dto.id,
  title: dto.title,
  duration: dto.duration ?? 0,
  cover: dto.artwork?.['480x480'] ?? '',
  genre: dto.genre ?? 'Unknown',
  favorite: dto?.favorite_count ?? 0,
  user: {
    id: dto.user?.id || '',
    name: dto.user.name,
    avatar: dto.user.profile_picture?.['480x480'] ?? '',
    followerCount: dto.user?.follower_count ?? 0,
    favoriteCount: dto.user?.favorite_count ?? 0,
  },
  streamUrl: dto.stream?.url ?? '',
});
