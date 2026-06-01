import React from 'react';
import classes from '@entities/player/ui/button-loop-list/ButtonLoopList.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import IconLoopList from '@shared/assets/icons/loop-list.svg?react';
import type { ButtonLoopListProps } from '@entities/player/types.ts';
import clsx from 'clsx';

const ButtonLoopList: React.FC<ButtonLoopListProps> = ({ onClick, isActive }) => {
  return (
    <Button className={clsx(classes.buttonLoopList, { [classes.buttonLoopListActive]: isActive })} onClick={onClick}>
      <IconLoopList />
    </Button>
  );
};

export default ButtonLoopList;
