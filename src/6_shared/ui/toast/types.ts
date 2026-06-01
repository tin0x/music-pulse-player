import React, { type SVGProps } from 'react';

type ToastTypeFields = {
  internet: {
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    message: string;
  };
};

export type ToastType = {
  en: ToastTypeFields;
  ua: ToastTypeFields;
};

export type ToastProps = {
  isActive: boolean;
  lang: 'en' | 'ua';
  type: 'internet';
};
