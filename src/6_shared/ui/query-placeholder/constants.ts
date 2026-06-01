import IconMusicRecord from '@shared/assets/icons/music-record.svg?react';
import IconErrorBoundary from '@shared/assets/icons/error-boundary.svg?react';

import type { QueryPlaceholderValues } from '@shared/ui/query-placeholder/types.ts';

export const errors: QueryPlaceholderValues = {
  en: {
    queryError: {
      message: 'Failed to load data. Please try again! If you get an error, check your internet connection.',
      buttonText: 'Retry',
    },
    clientError: {
      message: 'This path is invalid. Please check the URL or go to the home page.',
      buttonText: 'Return to the main page',
      Icon: IconMusicRecord,
    },
    empty: {
      message: "It's empty here for now!",
    },
    globalError: {
      message: 'Oops! Something went wrong',
      buttonText: 'Try again',
      buttonTextAlternative: 'Return to the main page',
      Icon: IconErrorBoundary,
    },
  },
  ua: {
    queryError: {
      message:
        'Не вдалося завантажити дані. Спробуйте ще раз! Якщо виникла помилка, перевірте підключення до Інтернету.',
      buttonText: 'Повторити спробу',
    },
    clientError: {
      message: 'Цей шлях недійсний. Перевірте URL-адресу або перейдіть на головну сторінку.',
      buttonText: 'Повернутися на головну сторінку',
      Icon: IconMusicRecord,
    },
    empty: {
      message: 'Тут поки що порожньо!',
    },
    globalError: {
      message: 'Упс! Щось пішло не так',
      buttonText: 'Спробувати ще раз',
      buttonTextAlternative: 'Повернутися на головну сторінку',
      Icon: IconErrorBoundary,
    },
  },
};
