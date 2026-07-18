import { z } from 'zod';

export const ArtistProfileDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string().nullish(),
  bio: z.string().nullish(),
  album_count: z.number(),
  follower_count: z.number().nullish(),
  profile_picture: z
    .object({
      '480x480': z.string().nullish(),
    })
    .nullish(),
  user_id: z.number(),
  track_count: z.number().nullish(),
  instagram_handle: z.string().nullish(),
  twitter_handle: z.string().nullish(),
  tiktok_handle: z.string().nullish(),
  website: z.string().nullish(),
});

export const ArtistsProfilesDTOResponseSchema = z.object({
  data: z.array(ArtistProfileDTOSchema),
})

export const ArtistProfileDTOResponseSchema = z.object({
  data: ArtistProfileDTOSchema,
});

export type ArtistProfileDTO = z.infer<typeof ArtistProfileDTOSchema>;