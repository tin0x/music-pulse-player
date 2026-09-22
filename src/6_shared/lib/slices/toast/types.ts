import type React from 'react';
import type { SVGProps } from 'react';

export type InitialState = {
  eventType: 'error' | 'success';
  messageType?: 'internet';
  customMessage?: string;
  isActive: boolean;
};

export type ShowToastPayload = {
  eventType: InitialState['eventType'];
  messageType?: InitialState['messageType'];
  customMessage?: InitialState['customMessage'];
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
