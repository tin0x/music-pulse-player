import React from 'react';
import InfoLabel from '@shared/ui/info-label/InfoLabel.tsx';
import type { NavigationWrapperProps } from '@shared/ui/navigation-wrapper/types.ts';
import classes from '@shared/ui/navigation-wrapper/NavigationWrapper.module.scss';

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({ label, children }) => {
  return (
    <div className={classes.navigationWrapper}>
      <InfoLabel text={label} isBorder />
      {children}
    </div>
  );
};

export default NavigationWrapper;
