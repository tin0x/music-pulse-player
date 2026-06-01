import React from 'react';
import classes from '@shared/ui/dropdown/Dropdown.module.scss';
import clsx from 'clsx';
import type { DropdownProps } from '@shared/ui/dropdown/types.ts';

const Dropdown: React.FC<DropdownProps> = ({ className, classNameWrapper, isLast, isOpen, children }) => {
  return (
    <div
      className={clsx(className, classes.dropdown, {
        [classes.dropdownOpen]: isOpen,
        [classes.dropdownUp]: isLast,
      })}
    >
      <div className={clsx(classNameWrapper, classes.dropdownWrapper)}>{children}</div>
    </div>
  );
};

export default Dropdown;
