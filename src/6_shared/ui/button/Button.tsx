import classes from '@shared/ui/button/Button.module.scss';
import type { ButtonProps } from '@shared/ui/button/types.ts';
import clsx from 'clsx';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ className, children, ariaLabel, ...rest }) => {
  return (
    <button className={clsx(className, classes.button)} {...rest} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
