import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { NumberedSwitchProps } from '@features/pagination-controls/types.ts';
import classes from '@features/pagination-controls/ui/numbered-switch/NumberedSwitch.module.scss';
import clsx from 'clsx';

const NumberedSwitch: React.FC<NumberedSwitchProps> = ({ className, switchPage, isActive, children }) => {
  return (
    <Button
      className={clsx(className, classes.numberedSwitch, {
        [classes.numberedSwitchActive]: isActive,
      })}
      onClick={switchPage}
    >
      {children}
    </Button>
  );
};

export default NumberedSwitch;
