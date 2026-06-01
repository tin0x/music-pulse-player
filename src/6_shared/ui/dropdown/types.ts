import React from 'react';

export type DropdownProps = {
  className?: string;
  classNameWrapper?: string;
  isOpen: boolean;
  isLast?: boolean;
  children: React.ReactNode;
};
