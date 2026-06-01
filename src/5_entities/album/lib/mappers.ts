import type { Track, TrackDTO } from '@entities/album/types.ts';

export const mapTrackToAlbum = (dto: TrackDTO): Track => ({
  id: dto.id,
  title: dto.title,
  duration: dto.duration,
  cover: dto.artwork?.['480x480'] ?? '',
  genre: dto.genre,
  favorite: dto.favorite_count,
  user: {
    id: dto.user.id,
    name: dto.user.name,
    avatar: dto.user.profile_picture?.['480x480'] ?? '',
  },
  streamUrl: dto.stream?.url ?? '',
});
