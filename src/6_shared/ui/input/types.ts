import React, { type SVGProps } from 'react';

export type InputProps = {
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  isLoading?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
