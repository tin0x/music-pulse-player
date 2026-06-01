import React from 'react';
import classes from '@widgets/main-widget/ui/MainWidget.module.scss';
import Toast from '@shared/ui/toast/Toast.tsx';
import { useCheckStatusOffline } from '@widgets/main-widget/model/useCheckStatusOffline.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import type { MainWidgetProps } from '@widgets/main-widget/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconBurger from '@shared/assets/icons/burger.svg?react';
import IconAside from '@shared/assets/icons/sidebar.svg?react';
import clsx from 'clsx';
import HistoryControls from '@features/toggle-app-history/ui/history-controls/HistoryControls.tsx';

const MainWidget: React.FC<MainWidgetProps> = ({
  isHeaderOpen,
  isAsideOpen,
  handleToggleHeader,
  handleToggleAside,
  children,
}) => {
  const { isOffline } = useCheckStatusOffline();

  const lang = useAppSelector(getCurrentLanguage);

  return (
    <main className={classes.main} data-offline={isOffline}>
      <div className={classes.mainTopBar}>
        <div className={classes.mainTopBarAuxiliaryUnit}>
          <Button
            className={clsx(classes.mainButton, { [classes.mainButtonActive]: isHeaderOpen })}
            onClick={handleToggleHeader}
          >
            <IconBurger />
          </Button>
          <Button
            className={clsx(classes.mainButton, classes.mainButtonAside, {
              [classes.mainButtonActive]: isAsideOpen,
            })}
            onClick={handleToggleAside}
          >
            <IconAside />
          </Button>
        </div>
        <div className="mainTopBarNavigation">
          <HistoryControls className={classes.mainTopBarControls} />
        </div>
      </div>
      <div className={classes.mainToastWrapper}>
        <Toast lang={lang} isActive={isOffline} type="internet" />
      </div>
      <div className={classes.mainScrollableContent}>{children}</div>
    </main>
  );
};

export default MainWidget;
