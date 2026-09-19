export type ToggleFavoriteProps = {
  type: 'track' | 'artist';
  id: string;
  variantButton: 'icon' | 'text';
};

export type FavoriteErrorCode = 'FAVORITE_TARGET_NOT_FOUND' | 'FAVORITE_ADD_FAILED';

export type ApiError = {
  status: number;
  data: {
    code: FavoriteErrorCode;
    message: string;
  };
};

export type AddFavoriteArgs = {
  entityType: string;
  entityId: string;
  userId: string;
};

export type RemoveFavoriteArgs = {
  entityType: string;
  entityId: string;
  userId: string;
};
