import { z } from 'zod';

const TrackDTOSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.number().nullish(),
  genre: z.string().nullish(),
  favorite_count: z.number().nullish(),
  release_date: z.string().nullish(),
  user_id: z.string().nullish(),
  artwork: z
    .object({
      '480x480': z.string().nullish(),
    })
    .nullish(),
  user: z
    .object({
      id: z.string(),
      name: z.string(),
      profile_picture: z
        .object({
          '480x480': z.string().nullish(),
        })
        .nullish(),

      follower_count: z.number().nullish(),
      favorite_count: z.number().nullish(),
    })
    .nullish(),
  stream: z
    .object({
      url: z.string(),
    })
    .nullish(),
});
export const TracksDTOSchema = z.object({
  data: z.array(TrackDTOSchema),
});

export type TrackDTO = z.infer<typeof TrackDTOSchema>;
