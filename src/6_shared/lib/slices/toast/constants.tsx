import ErrorIcon from '@shared/assets/icons/error-icon.svg?react';
import SuccessIcon from '@shared/assets/icons/success-icon.svg?react';
import type { ToastType } from '@shared/lib/slices/toast/types';

export const toastType: ToastType = {
  en: {
    icons: {
      success: SuccessIcon,
      error: ErrorIcon,
    },
    messages: {
      success: {
        internet: 'Internet connection restored.',
      },
      error: {
        internet: 'No internet connection. The application works offline.',
      },
    },
  },
  ua: {
    icons: {
      success: SuccessIcon,
      error: ErrorIcon,
    },
    messages: {
      success: {
        internet: 'Підключення до Інтернету відновлено.',
      },
      error: {
        internet: 'Internet connection restored.',
      },
    },
  },
};
