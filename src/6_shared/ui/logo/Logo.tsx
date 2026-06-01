import React from 'react';
import type { LogoProps } from '@shared/ui/logo/types.ts';
import classes from '@shared/ui/logo/Logo.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Logo: React.FC<LogoProps> = ({ className, Icon, text, pathTo }) => {
  const content = (
    <div className={clsx(className, classes.logo)}>
      {Icon && <Icon className={classes.logoIcon} role="img" aria-label="application logo" lang="en" />}
      {text && <h1 className={classes.logoText}>{text}</h1>}
    </div>
  );

  if (pathTo && pathTo.trim() !== '') {
    return <Link to={pathTo}>{content}</Link>;
  }

  return content;
};

export default Logo;
