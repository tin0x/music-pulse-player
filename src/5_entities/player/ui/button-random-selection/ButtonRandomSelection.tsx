import React from 'react';
import classes from '@entities/player/ui/button-random-selection/ButtonRandomSelection.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import IconRandomSelection from '@shared/assets/icons/random-selection.svg?react';
import type { ButtonRandomSelection } from '@entities/player/types.ts';
import clsx from 'clsx';

const ButtonRandomSelection: React.FC<ButtonRandomSelection> = ({ onClick, isActive }) => {
  return (
    <Button
      className={clsx(classes.buttonRandomSelection, {
        [classes.buttonRandomSelectionActive]: isActive,
      })}
      onClick={onClick}
    >
      <IconRandomSelection />
    </Button>
  );
};

export default ButtonRandomSelection;
