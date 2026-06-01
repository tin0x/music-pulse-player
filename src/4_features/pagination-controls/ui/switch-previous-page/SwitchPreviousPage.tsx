import React from 'react';
import type { SwitchPreviousPageProps } from '@features/pagination-controls/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconArrowPrev from '@shared/assets/icons/arrow-prev.svg?react';
import classes from '@features/pagination-controls/ui/switch-previous-page/SwitchPreviousPage.module.scss';
import clsx from 'clsx';

const SwitchPreviousPage: React.FC<SwitchPreviousPageProps> = ({ onPrev, isDisabled }) => {
  // console.log(isDisabled)

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
