import React from 'react';
import classes from '@shared/ui/duration/Duration.module.scss';

const Duration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className={classes.duration}>{children}</span>;
};

export default Duration;
