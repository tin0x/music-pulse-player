import React from 'react';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  ariaLabel: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
