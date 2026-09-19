import type { Favorite, FavoriteDTO } from '@entities/favorite/types';

const mapFavorites = (dto: FavoriteDTO): Favorite => ({
  entityType: dto.entity_type,
  entityId: dto.entity_id,
});

export default mapFavorites;
