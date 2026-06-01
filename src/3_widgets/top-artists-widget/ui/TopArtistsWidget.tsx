import React from 'react';
import ItemsContainer from '@shared/ui/items-container/ItemsContainer.tsx';
import ArtistItem from '@entities/artist/ui/artist-item/ArtistItem.tsx';
import { useFetchArtists } from '@widgets/top-artists-widget/model/useFetchArtists.ts';
import classes from '@widgets/top-artists-widget/ui/TopArtistsWidget.module.scss';
import { useIsAuth } from '@features/auth/model/hooks/useFetchToken.ts';
import ArtistBlockSkeleton from '@shared/ui/skeletons/artist-block-skeleton/ArtistBlockSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useInitTopArtistsWidget } from '@widgets/top-artists-widget/model/useInitTopArtistsWidget.tsx';

const TopArtistsWidget: React.FC = () => {
  const { sortedArtists: artists, isLoading, error, refetch, isFetching, artistIdParam } = useFetchArtists(100);
  const { lang, t, renderActionToggleFavorite } = useInitTopArtistsWidget();
  const { isAuth } = useIsAuth();

  if (!isAuth || isLoading || isFetching) {
    return <ArtistBlockSkeleton />;
  }

  if (error) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={refetch} />;
  }

  if (artists.length === 0) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  return (
    <ItemsContainer title={t.str.topArtistsAside}>
      <ul className={classes.topArtistsList}>
        {artists.map((artist, index) => (
          <li className="artistBlockItem" key={artist.id}>
            <ArtistItem
              artist={artist}
              isLast={index >= artists.length - 2}
              artistIdParam={artistIdParam}
              renderActionToggleFavorite={renderActionToggleFavorite}
              lang={lang}
            />
          </li>
        ))}
      </ul>
    </ItemsContainer>
  );
};

export default TopArtistsWidget;
