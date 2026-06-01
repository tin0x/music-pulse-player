import React from 'react';
import type { ButtonProps } from '@shared/ui/button/types.ts';
import classes from '@shared/ui/button/Button.module.scss';
import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={clsx(className, classes.button)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
