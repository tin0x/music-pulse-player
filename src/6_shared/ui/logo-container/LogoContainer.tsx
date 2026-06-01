import React from 'react';
import type { LogoContainerProps } from '@shared/ui/logo-container/types.ts';

const LogoContainer: React.FC<LogoContainerProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default LogoContainer;
