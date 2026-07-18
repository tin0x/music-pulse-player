import { z } from 'zod';

const TrackFromSearchResultDTOSchema = z.object({
  track_id: z.number(),
  title: z.string(),
});

export const TracksFromSearchResultDTOSchema = z.object({
  data: z.object({
    tracks: z.array(TrackFromSearchResultDTOSchema),
  }),
});

export type TrackFromSearchResultDTO = z.infer<typeof TrackFromSearchResultDTOSchema>;