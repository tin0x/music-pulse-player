import useLanguage from '@app/providers/language/useLanguage';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector';
import { toastType } from '@shared/lib/slices/toast/constants';
import { hiddenToast } from '@shared/lib/slices/toast/model/toastSlice';
import { getToastState } from '@shared/lib/slices/toast/selectors';
import classes from '@shared/lib/slices/toast/ui/Toast.module.scss';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Toast: React.FC = () => {
  const dispatch = useAppDispatch();

  const { currentLanguage } = useLanguage();
  const { eventType, messageType, isActive } = useAppSelector(getToastState);

  const Icon = toastType[currentLanguage].icons[eventType];
  const message = toastType[currentLanguage].messages[eventType][messageType];

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(hiddenToast());
    }, 10000);

    return () => clearTimeout(id);
  }, [isActive, dispatch]);

  return createPortal(
    <div
      className={clsx(classes.toast, {
        [classes.toastActive]: isActive,
        [classes.toastSuccess]: eventType === 'success',
        [classes.toastError]: eventType === 'error',
      })}
    >
      <Icon className={classes.toastIcon} />
      <span className={classes.toastMessage}>{message}</span>
    </div>,
    document.getElementById('modal-root')!,
  );
};

export default Toast;
