import React from 'react';
import type { InputProps } from '@shared/ui/input/types.ts';
import classes from '@shared/ui/input/Input.module.scss';
import clsx from 'clsx';

const Input: React.FC<InputProps> = ({ className, Icon, isLoading, ...rest }) => {
  return (
    <div className={clsx(className, classes.inputWrapper)}>
      {Icon && <Icon className={clsx(classes.inputIcon, { [classes.inputIconAnimation]: isLoading })} aria-hidden />}
      <input className={classes.input} {...rest} />
    </div>
  );
};

export default Input;
