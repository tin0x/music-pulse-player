import React from 'react';
import classes from '@shared/ui/pagination/Pagination.module.scss';
import clsx from 'clsx';
import type { PaginationProps } from '@shared/ui/pagination/types.ts';

const Pagination: React.FC<PaginationProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, classes.pagination)}>
      <div className={classes.paginationWrapper}>{children}</div>
    </div>
  );
};

export default Pagination;
