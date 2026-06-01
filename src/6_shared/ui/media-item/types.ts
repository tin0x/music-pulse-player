import React from 'react';

export interface MediaItemProps {
  className?: string;
  classNameAvatar?: string;
  index?: string;
  srcAvatar: string;
  alt: string;
  title: string;
  subtext?: string;
  duration?: React.ReactNode;
  durationSize?: 'small' | 'large';
  isBorder?: boolean;
  pathTo?: string;
  refElement?: React.RefObject<HTMLDivElement | null>;

  slots?: {
    beforeDuration?: React.ReactNode;
    action?: React.ReactNode;
  };
}
