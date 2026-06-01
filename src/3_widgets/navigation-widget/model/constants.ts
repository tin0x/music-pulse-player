import IconUser from '@shared/assets/icons/user.svg?react';
import IconDashboard from '@shared/assets/icons/dashboard.svg?react';
import IconLove from '@shared/assets/icons/heart.svg?react';
import IconSetting from '@shared/assets/icons/setting.svg?react';
import type { DataNavigation } from '@widgets/navigation-widget/types.ts';

export const dataNavigation: DataNavigation[] = [
  {
    title: 'menuHeader',
    items: [
      { label: 'profileHeader', to: '/profile', icon: IconUser },
      { label: 'dashboardHeader', to: '/dashboard', icon: IconDashboard },
      { label: 'favoriteHeader', to: '/favorite', icon: IconLove },
    ],
  },
  {
    title: 'helpHeader',
    items: [{ label: 'settingsHeader', to: '/settings', icon: IconSetting }],
  },
];
