import { useClickOutside } from '@shared/lib/hooks/ui/useClickOutside.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Button from '@shared/ui/button/Button.tsx';
import classes from '@shared/ui/popup/Popup.module.scss';
import type { PopupProps } from '@shared/ui/popup/types.ts';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

const Popup: React.FC<PopupProps> = ({ className, message, lang, onConfirm, onCancel, isLoading }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(rootRef, onCancel);

  const t = getTranslate(lang);

  return createPortal(
    <div className={clsx(className, classes.popup)}>
      <div className={classes.popupWrapper} ref={rootRef} role="dialog" aria-modal>
        <p className={classes.popupText}>{message}</p>
        <div className={classes.popupButtons}>
          <Button className={classes.popupButton} disabled={isLoading} onClick={onConfirm}>
            {t.str.ok}
          </Button>
          <Button className={classes.popupButton} onClick={onCancel}>
            {t.str.cancel}
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')!,
  );
};

export default Popup;
