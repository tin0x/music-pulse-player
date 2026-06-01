import React, { useRef } from 'react';
import classes from '@shared/ui/popup/Popup.module.scss';
import clsx from 'clsx';
import type { PopupProps } from '@shared/ui/popup/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import { createPortal } from 'react-dom';
import { useClickOutside } from '@shared/lib/hooks/ui/useClickOutside.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const Popup: React.FC<PopupProps> = ({ className, message, lang, onConfirm, onCancel }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(rootRef, onCancel);

  const t = getTranslate(lang);

  return createPortal(
    <div className={clsx(className, classes.popup)}>
      <div className={classes.popupWrapper} ref={rootRef} role="dialog" aria-modal>
        <p className={classes.popupText}>{message}</p>
        <div className={classes.popupButtons}>
          <Button className={classes.popupButton} onClick={onConfirm}>
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
