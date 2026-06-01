import React from 'react';

export type CardProps = {
  src: string;
  className?: string;
  isSubWrapper?: boolean;
  subTitle?: string;
  children?: React.ReactNode;
};
