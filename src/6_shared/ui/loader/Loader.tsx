import React from 'react';
import clsx from 'clsx';
import type { LoaderProps } from '@shared/ui/loader/types.ts';
import classes from '@shared/ui/loader/Loader.module.scss';

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={clsx(className, classes.loaderWrapper)}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
