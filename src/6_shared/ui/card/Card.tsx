import React from 'react';
import classes from '@shared/ui/card/Card.module.scss';
import clsx from 'clsx';
import type { CardProps } from '@shared/ui/card/types.ts';

const Card: React.FC<CardProps> = ({ src, className, isSubWrapper, subTitle, children }) => {
  return (
    <div className={clsx(className, classes.card)} style={{ backgroundImage: `url(${src})` }}>
      {isSubWrapper && (
        <div className={classes.cardSubWrapper}>
          <span className={classes.cardSubTitle}>{subTitle}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
