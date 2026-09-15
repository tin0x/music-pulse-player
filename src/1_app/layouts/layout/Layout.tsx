import classes from '@app/layouts/layout/Layout.module.scss';
import useLanguage from '@app/providers/language/useLanguage';
import { HistoryControls } from '@features/toggle-app-history';
import IconClose from '@shared/assets/icons/close.svg?react';
import IconLogo from '@shared/assets/icons/logo.svg?react';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Button from '@shared/ui/button/Button.tsx';
import Copyright from '@shared/ui/copyright/Copyright.tsx';
import LogoContainer from '@shared/ui/logo-container/LogoContainer.tsx';
import Logo from '@shared/ui/logo/Logo.tsx';
import VersionInfo from '@shared/ui/version-info/VersionInfo.tsx';
import { AsideWidget } from '@widgets/aside-widget';
import { FooterWidget } from '@widgets/footer-widget';
import { HeaderWidget } from '@widgets/header-widget';
import { MainWidget } from '@widgets/main-widget';
import { MessageCardWidget } from '@widgets/message-card-widget';
import { NavigationWidget } from '@widgets/navigation-widget';
import { PlayerBarWidget } from '@widgets/player-bar-widget';
import { ProfileCardWidget } from '@widgets/profile-card-widget';
import { RecentlyPlayedWidget } from '@widgets/recently-played-widget';
import { TopArtistsWidget } from '@widgets/top-artists-widget';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(() => window.innerWidth >= 1600);
  const [isAsideOpen, setIsAsideOpen] = useState(() => window.innerWidth >= 1600);

  const { pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1600) {
      const timer = setTimeout(() => {
        setIsHeaderOpen(false);
        setIsAsideOpen(false);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <div className={classes.layout} data-header-open={isHeaderOpen} data-aside-open={isAsideOpen}>
      <HeaderWidget className={classes.layoutHeaderWidget} isOpen={isHeaderOpen}>
        <LogoContainer className={classes.layoutLogoContainer}>
          <Logo Icon={IconLogo} text="Music Pulse" pathTo="/dashboard" />
          <HistoryControls className={classes.layoutHistoryControls} />
          <Button className={classes.layoutButtonClose} onClick={() => setIsHeaderOpen(false)}>
            <IconClose />
          </Button>
        </LogoContainer>
        <NavigationWidget />
        <div className={classes.layoutBottomHeader}>
          <VersionInfo text={`${t.str.versionHeader} 1.1.0`} />
          <Copyright />
        </div>
      </HeaderWidget>
      <MainWidget
        isHeaderOpen={isHeaderOpen}
        isAsideOpen={isAsideOpen}
        handleToggleHeader={() => {
          setIsHeaderOpen((prev) => !prev);
          setIsAsideOpen(false);
        }}
        handleToggleAside={() => {
          setIsAsideOpen((prev) => !prev);
          setIsHeaderOpen(false);
        }}
      >
        <Outlet />
      </MainWidget>
      <AsideWidget className={classes.layoutAsideWidget} isOpen={isAsideOpen}>
        <ProfileCardWidget renderMessage={(m) => <MessageCardWidget id={m.id} title={m.title} text={m.text} />} />
        <Button
          className={clsx(classes.layoutButtonClose, classes.layoutButtonCloseFlex)}
          onClick={() => setIsAsideOpen(false)}
        >
          <IconClose />
        </Button>
        <TopArtistsWidget />
        <RecentlyPlayedWidget />
      </AsideWidget>
      <FooterWidget>
        <PlayerBarWidget />
      </FooterWidget>
    </div>
  );
};

export default Layout;
