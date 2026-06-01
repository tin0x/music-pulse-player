import React, { useRef } from 'react';
import classes from '@features/change-avatar/ui/ChangeAvatar.module.scss';
import { useChangeAvatar } from '@features/change-avatar/model/useChangeAvatar.ts';
import Button from '@shared/ui/button/Button.tsx';

const ChangeAvatar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { handleChangeAvatar, handleButtonClick } = useChangeAvatar(fileInputRef);

  return (
    <div className={classes.changeAvatarWrapper}>
      <Button
        type="button"
        className={classes.changeAvatarButton}
        onClick={handleButtonClick}
        aria-label="Change avatar"
        lang="en"
      >
        {children}
      </Button>
      <input
        className={classes.changeAvatarInput}
        ref={fileInputRef}
        onChange={handleChangeAvatar}
        id="changeAvatar"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default ChangeAvatar;
