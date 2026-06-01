import type { Track, TrackDTO } from '@entities/track/types.ts';

export const mapTrack = (dto: TrackDTO): Track => ({
  id: dto.id,
  title: dto.title,
  duration: dto.duration || 0,
  genre: dto.genre || 'Unknown',
  cover: dto.artwork?.['480x480'] || '',
  favorite: dto.favorite_count || 0,
  release: dto.release_date || '',
  userId: dto.user_id,
  user: {
    id: dto.user?.id,
    name: dto.user?.name,
    avatar: dto.user?.profile_picture?.['480x480'] || '',
  },
  streamUrl: dto.stream?.url || '',
});
