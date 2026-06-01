import React from 'react';
import type { ItemsContainerProps } from '@shared/ui/items-container/types.ts';
import classes from '@shared/ui/items-container/ItemsContainer.module.scss';

const ItemsContainer: React.FC<ItemsContainerProps> = ({ title, children }) => {
  return (
    <div className={classes.itemsContainer}>
      <span className={classes.itemsContainerTitle}>{title}</span>
      <div className="itemsContainerData">{children}</div>
    </div>
  );
};

export default ItemsContainer;
