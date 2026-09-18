import { useChangeAvatar } from '@features/update-user-info/model/useChangeAvatar';
import classes from '@features/update-user-info/ui/change-avatar/ChangeAvatar.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import React, { useRef } from 'react';

const ChangeAvatar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { handleChangeAvatar, handleButtonClick, isLoading } = useChangeAvatar(fileInputRef);

  return (
    <div className={classes.changeAvatarWrapper}>
      <Button
        className={classes.changeAvatarButton}
        type="button"
        disabled={isLoading}
        onClick={handleButtonClick}
        ariaLabel="Change avatar"
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
