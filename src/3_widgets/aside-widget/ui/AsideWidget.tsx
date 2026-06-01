import React from 'react';
import classes from '@widgets/aside-widget/ui/AsideWidget.module.scss';
import type { AsideWidgetProps } from '@widgets/aside-widget/types.ts';
import clsx from 'clsx';

const AsideWidget: React.FC<AsideWidgetProps> = ({ className, isOpen, children }) => {
  return (
    <aside className={clsx(className, classes.aside, { [classes.asideActive]: isOpen })}>
      <div className={classes.asideWrapper}>{children}</div>
    </aside>
  );
};

export default AsideWidget;
