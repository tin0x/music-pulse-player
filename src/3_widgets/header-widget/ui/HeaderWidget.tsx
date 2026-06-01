import React from 'react';
import classes from '@widgets/header-widget/ui/HeaderWidget.module.scss';
import type { HeaderWidgetProps } from '@widgets/header-widget/types.ts';
import clsx from 'clsx';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ className, isOpen, children }) => {
  return (
    <header className={clsx(className, classes.header, { [classes.headerActive]: isOpen })}>
      <div className={classes.headerWrapper}>{children}</div>
    </header>
  );
};

export default HeaderWidget;
