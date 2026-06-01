import React from 'react';
import classes from '@entities/album/ui/genre/genre-item/GenreItem.module.scss';
import Card from '@shared/ui/card/Card.tsx';

const GenreItem: React.FC<{ src: string; subTitle: string }> = ({ src, subTitle }) => {
  return <Card className={classes.genreItem} src={src} isSubWrapper subTitle={subTitle} />;
};

export default GenreItem;
