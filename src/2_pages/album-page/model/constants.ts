export const genres = [
  'House',
  'Electronic',
  'Dubstep',
  'Hip-Hop',
  'Trap',
  'Tech House',
  'Pop',
  'Drum & Bass',
  'Electro',
  'Techno',
] as const;

export const sortingParams = ['relevant', 'popular', 'recent'];
export const moodParams = ['other', 'peaceful', 'fiery', 'romantic'];

export type GenreType = (typeof genres)[number];
