export type FavoriteErrorCode = 'FAVORITES_FETCH_FAILED';

export type ApiError = {
  status: number;
  data: {
    code: FavoriteErrorCode;
    message: string;
  };
};

export type FavoriteDTO = {
  entity_type: string;
  entity_id: string;
};

export type Favorite = {
  entityType: string;
  entityId: string;
};

export type Favorites = {
  tracks: string[];
  artists: string[];
};
