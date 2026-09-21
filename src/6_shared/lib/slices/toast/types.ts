import type React from 'react';
import type { SVGProps } from 'react';

export type InitialState = {
  eventType: 'error' | 'success';
  messageType: 'internet';
  isActive: boolean;
};

export type AddToastPayload = {
  eventType: InitialState['eventType'];
  messageType: InitialState['messageType'];
};

type ToastTypeFields = {
  icons: {
    success: React.FC<SVGProps<SVGSVGElement>>;
    error: React.FC<SVGProps<SVGSVGElement>>;
  };
  messages: {
    success: {
      internet: string;
    };
    error: {
      internet: string;
    };
  };
};

export type ToastType = {
  en: ToastTypeFields;
  ua: ToastTypeFields;
};
