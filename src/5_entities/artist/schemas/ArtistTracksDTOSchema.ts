import { z } from 'zod';

const ArtistTrackDTOSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.number().nullish(),
  genre: z.string().nullish(),
  favorite_count: z.number(),
  artwork: z
    .object({
      '480x480': z.string().nullish(),
    })
    .nullish(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    profile_picture: z.object({ '480x480': z.string().nullish() }),
    follower_count: z.number().nullish(),
    favorite_count: z.number().nullish(),
  }),
  stream: z.object({
    url: z.string().nullish(),
  }),
});

export const ArtistTracksDTOSchema = z.object({
  data: z.array(ArtistTrackDTOSchema),
});

export type ArtistTrackDTO = z.infer<typeof ArtistTrackDTOSchema>;
