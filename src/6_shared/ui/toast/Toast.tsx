import React from 'react';
import classes from '@shared/ui/toast/Toast.module.scss';
import type { ToastProps } from '@shared/ui/toast/types.ts';
import { toastType } from '@shared/ui/toast/constants.ts';
import clsx from 'clsx';

const Toast: React.FC<ToastProps> = ({ isActive, type, lang }) => {
  const Icon = toastType[lang][type].Icon;
  const message = toastType[lang][type].message;

  return (
    <div className={clsx(classes.toast, { [classes.toastActive]: isActive })}>
      <Icon className={classes.toastIcon} />
      <span className={classes.toastMessage}>{message}</span>
    </div>
  );
};

export default Toast;
