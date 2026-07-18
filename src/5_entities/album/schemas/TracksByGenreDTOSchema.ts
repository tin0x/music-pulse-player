import { z } from 'zod';

const TrackByGenreDTOSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.number(),
  genre: z.string(),
  favorite_count: z.number(),
  artwork: z
    .object({
      '480x480': z.string().nullish(),
    })
    .nullish(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    profile_picture: z
      .object({
        '480x480': z.string().nullish(),
      })
      .nullish(),
  }),
  stream: z
    .object({
      url: z.string(),
    })
    .nullish(),
});

export const TracksByGenreDTOSchema = z.object({
  data: z.array(TrackByGenreDTOSchema),
});

export type TrackByGenreDTO = z.infer<typeof TrackByGenreDTOSchema>;