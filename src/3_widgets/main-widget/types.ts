import React from 'react';

export type MainWidgetProps = {
  children: React.ReactNode;
  handleToggleHeader: () => void;
  handleToggleAside: () => void;
  isHeaderOpen: boolean;
  isAsideOpen: boolean;
};
