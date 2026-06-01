import type { ArtistProfile, ArtistProfileDTO, ArtistTrack, ArtistTrackDTO } from '@entities/artist/types.ts';

export const mapArtist = (dto: ArtistProfileDTO): ArtistProfile => ({
  id: dto.id,
  name: dto.name,
  location: dto.location || 'Unknown',
  bio: dto.bio || 'Unknown',
  albumCount: dto.album_count || 0,
  followerCount: dto.follower_count || 0,
  avatar: dto.profile_picture?.['480x480'] || '',
  userId: dto.user_id,
  trackCount: dto.track_count || 0,
  socialLinks: {
    instagram: dto.instagram_handle || '',
    twitter: dto.twitter_handle || '',
    tiktok: dto.tiktok_handle || '',
    website: dto.website || '',
  },
});

export const mapArtistTrack = (dto: ArtistTrackDTO): ArtistTrack => ({
  id: dto.id,
  title: dto.title,
  duration: dto.duration || 0,
  cover: dto.artwork?.['480x480'] || '',
  genre: dto.genre || 'Unknown',
  favorite: dto.favorite_count || 0,
  user: {
    id: dto.user?.id || '',
    name: dto.user.name,
    avatar: dto.user.profile_picture?.['480x480'] || '',
    followerCount: dto.user.follower_count || 0,
    favoriteCount: dto.user.favorite_count || 0,
  },
  streamUrl: dto.stream?.url || '',
});
