import React from 'react';
import classes from '@shared/ui/equalizer/Equalizer.module.scss';
import clsx from 'clsx';
import type { EqualizerProps } from '@shared/ui/equalizer/types.ts';

const Equalizer: React.FC<EqualizerProps> = React.memo(({ className, isActive }) => {
  return (
    <div className={clsx(className, classes.equalizer, { [classes.equalizerActive]: isActive })}>
      <div className={classes.equalizerBar}></div>
      <div className={classes.equalizerBar}></div>
      <div className={classes.equalizerBar}></div>
      <div className={classes.equalizerBar}></div>
      <div className={classes.equalizerBar}></div>
    </div>
  );
});

export default Equalizer;
