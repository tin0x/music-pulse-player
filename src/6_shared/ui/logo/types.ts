import React, { type SVGProps } from 'react';

export type LogoProps = {
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  text?: string;
  className?: string;
  pathTo?: string;
};
