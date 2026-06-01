import React, { type SVGProps } from 'react';
import type { InitialState } from '@entities/user/types.ts';

export type QueryPlaceholderType = 'queryError' | 'clientError' | 'empty' | 'globalError';

export type QueryPlaceholderProps = {
  className?: string;
  variant: QueryPlaceholderType;
  alternativeMessage?: string;
  onClick?: () => void;
  onClickAlternative?: () => void;
  lang: InitialState['language'];
};

export type QueryPlaceholderFields = {
  queryError: {
    message: string;
    buttonText: string;
  };
  clientError: {
    message: string;
    buttonText: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
  };
  empty: {
    message: string;
  };
  globalError: {
    message: string;
    buttonText: string;
    buttonTextAlternative: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
  };
};
export type QueryPlaceholderValues = {
  en: QueryPlaceholderFields;
  ua: QueryPlaceholderFields;
};
