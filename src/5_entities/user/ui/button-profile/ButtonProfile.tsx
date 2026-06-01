import React from 'react';
import classes from '@entities/user/ui/button-profile/ButtonProfile.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import type { ButtonProfileProps } from '@entities/user/types.ts';

const ButtonProfile: React.FC<ButtonProfileProps> = ({ children, ariaLabel, lang, isDisabled, onClick }) => {
  return (
    <Button
      className={classes.buttonProfile}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      lang={lang}
    >
      {children}
    </Button>
  );
};

export default ButtonProfile;
