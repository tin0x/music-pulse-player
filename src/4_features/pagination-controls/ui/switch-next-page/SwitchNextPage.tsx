import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import classes from '@features/pagination-controls/ui/switch-next-page/SwitchNextPage.module.scss';
import IconArrowNext from '@shared/assets/icons/arrow-next.svg?react';
import type { SwitchNextPageProps } from '@features/pagination-controls/types.ts';
import clsx from 'clsx';

const SwitchNextPage: React.FC<SwitchNextPageProps> = ({ onNext, isDisabled }) => {
  return (
    <Button className={clsx(classes.switchNextPage, { [classes.switchNextPageDisabled]: isDisabled })} onClick={onNext}>
      <IconArrowNext fill="currentColor" />
    </Button>
  );
};

export default SwitchNextPage;
