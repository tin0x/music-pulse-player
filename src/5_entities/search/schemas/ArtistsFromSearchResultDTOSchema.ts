import { z } from 'zod';

export const ArtistFromSearchResultDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ArtistsFromSearchResultDTO = z.object({
  data: z.object({
    users: z.array(ArtistFromSearchResultDTOSchema),
  }),
});

export type ArtistFromSearchResultDTO = z.infer<typeof ArtistFromSearchResultDTOSchema>;