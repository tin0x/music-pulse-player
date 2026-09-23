import type { SwitchPreviousPageProps } from '@features/pagination-controls/types.ts';
import classes from '@features/pagination-controls/ui/switch-previous-page/SwitchPreviousPage.module.scss';
import IconArrowPrev from '@shared/assets/icons/arrow-prev.svg?react';
import Button from '@shared/ui/button/Button.tsx';
import clsx from 'clsx';
import React from 'react';

const SwitchPreviousPage: React.FC<SwitchPreviousPageProps> = ({ onPrev, isDisabled }) => {
  return (
    <Button
      className={clsx(classes.switchPreviousPage, {
        [classes.switchPreviousPageDisabled]: isDisabled,
      })}
      onClick={onPrev}
    >
      <IconArrowPrev />
    </Button>
  );
};

export default SwitchPreviousPage;
