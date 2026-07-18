import type { ArtistProfile } from '@entities/artist/types.ts';
import type { ArtistProfileDTO } from '@entities/artist/schemas/ArtistProfileDTOSchema.ts';

export const mapArtist = (dto: ArtistProfileDTO): ArtistProfile => ({
  id: dto.id,
  name: dto.name,
  location: dto.location ?? 'Unknown',
  bio: dto.bio ?? 'Unknown',
  albumCount: dto.album_count ?? 0,
  followerCount: dto.follower_count ?? 0,
  avatar: dto.profile_picture?.['480x480'] ?? '',
  userId: dto.user_id,
  trackCount: dto.track_count ?? 0,
  socialLinks: {
    instagram: dto.instagram_handle ?? '',
    twitter: dto.twitter_handle ?? '',
    tiktok: dto.tiktok_handle ?? '',
    website: dto.website ?? '',
  },
});
