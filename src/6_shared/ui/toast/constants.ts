import IconWifiDisconnected from '@shared/assets/icons/wifi-disconnected.svg?react';
import type { ToastType } from '@shared/ui/toast/types.ts';

export const toastType: ToastType = {
  en: {
    internet: {
      Icon: IconWifiDisconnected,
      message: 'No internet connection. The application works offline.',
    },
  },
  ua: {
    internet: {
      Icon: IconWifiDisconnected,
      message: 'Немає підключення до інтернету. Додаток працює офлайн.',
    },
  },
};
